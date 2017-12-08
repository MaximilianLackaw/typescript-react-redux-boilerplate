
import * as React from "react";

export default class Hello extends React.Component {
  static async test() {
    return 'FooBar!';
  }

  render() {
    return <h1>FooBar!</h1>;
  }
}
