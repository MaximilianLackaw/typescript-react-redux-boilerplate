import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';
import { Foo } from '../../components';
import { RootState } from '../../reducers';

export class App extends React.Component<{}, {}> {

  public render() {
    return (
      <Foo />
    );
  }
}
