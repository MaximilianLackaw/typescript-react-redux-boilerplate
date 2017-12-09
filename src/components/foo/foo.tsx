
import * as React from 'react';
import * as style from './foo.css';

export default class Hello extends React.Component {
  public render() {
    return <h1 className={style.main} >FooBar</h1>;
  }
}
