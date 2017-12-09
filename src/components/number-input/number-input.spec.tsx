
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import NumberInput from './number-input';

describe('<NumberInput />', () => {
  let numberInputWrapper: ShallowWrapper<any, any>;
  let onChangeCallback: jest.Mock<{}>;

  beforeEach(() => {
    onChangeCallback = jest.fn();
  });

  describe('When rendering coponent', () => {
    describe('And no init value is set', () => {
      beforeEach(() => {
         numberInputWrapper = shallow(<NumberInput onChange={onChangeCallback} />);
      });

      it('should initialize with "0"', () => {
        const value = numberInputWrapper.state().value as number;
        expect(value).toBe(0);
      });
    });

    describe('When rendering coponent And init value is set', () => {
      beforeEach(() => {
         numberInputWrapper = shallow(
          <NumberInput onChange={onChangeCallback} initValue={5} />);
      });

      it('should initialize with given initializing value', () => {
        const value = numberInputWrapper.state().value as number;
        expect(value).toBe(5);
      });
    });

    describe('And typing in a number', () => {
      beforeEach(() => {
        numberInputWrapper = shallow(<NumberInput onChange={onChangeCallback} />);
        numberInputWrapper.simulate('change', { target: { value: '42' }});
      });

      it('should change the value to user input', () => {
        const value = numberInputWrapper.state().value as number;
        expect(value).toBe(42);
      });

      it('should call props.onChange with user input as number', () => {
        expect(onChangeCallback).toBeCalledWith(42);
      });
    });
  });
});
