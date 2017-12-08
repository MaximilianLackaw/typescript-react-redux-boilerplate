
import * as React from "react";
import { shallow } from "enzyme";

import { Footer } from '../Footer';
import Foo from '../foo';

async function test() {
  return (<h1>FooBar!</h1>);
}

it('should 1 + 1 = 2', () => {
  expect(1 + 1).toBe(2);
});

it("renders the heading", () => {
    const result = shallow(
      <Footer
        filter={null}
        activeCount={null}
        completedCount={5}
        onShow={filter => 5}
        onClearCompleted={()=>5}
      />
    ).find('ul').first();

    expect(result).toBeTruthy();
});

it('renders foo', async () => {
  const expectedResult = await test();
  const result = shallow(<Foo />).contains(expectedResult);

  expect(result).toBeTruthy();
});
