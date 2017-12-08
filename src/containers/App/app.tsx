import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { RootState } from '../../reducers';
import { Foo } from '../../components';

export namespace App {
  export interface Props extends RouteComponentProps<void> {
    /* empty */
  }

  export interface State {
    /* empty */
  }
}

@connect(mapStateToProps)
export class App extends React.Component<App.Props, App.State> {

  render() {
    return (
      <Foo />
    );
  }
}

function mapStateToProps(state: RootState) {
  return {};
}
