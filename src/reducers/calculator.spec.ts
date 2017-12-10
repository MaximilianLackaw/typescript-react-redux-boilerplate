import {Action} from 'redux';
import { EDIT_FIRSTVALUE, EDIT_SECONDVALUE } from '../constants/actions';
import reducer from './calculator';

describe('calculator reducers', () => {
  const defaultInitState: CalculatorStoreState = {
    firstInputValue: 5,
    secondInputValue: 10,
    resultValue: 15,
  };

  it('should return the inital state', () => {
    const test = { type: 'completly unknow'};

    const newState = reducer(undefined, test);

    expect(newState).toEqual({
      firstInputValue: 0,
      secondInputValue: 0,
      resultValue: 0,
    });
  });

  it('handles edit first value', () => {
    const newState = reducer(defaultInitState, {
      type: EDIT_FIRSTVALUE,
      payload: 15,
    });

    expect(newState).toEqual({
      firstInputValue: 15,
      secondInputValue: 10,
      resultValue: 25,
    });
  });

  it('handles edit second value', () => {
    const newState = reducer(defaultInitState, {
      type: EDIT_SECONDVALUE,
      payload: 42,
    });

    expect(newState).toEqual({
      firstInputValue: 5,
      secondInputValue: 42,
      resultValue: 47,
    });
  });
});
