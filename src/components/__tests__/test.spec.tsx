
import { shallow } from 'enzyme';
import * as React from 'react';

import { Foo } from '../index';

async function test() {
  return (<h1>FooBar</h1>);
}

it('should 1 + 1 = 2', () => {
  expect(1 + 1).toBe(2);
});

it('renders foo', async () => {
  const expectedResult = await test();

  const result = shallow(<Foo />).contains(expectedResult);

  expect(result).toBeTruthy();
});
