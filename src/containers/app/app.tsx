import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators } from 'redux';

import * as CalculatorActions from '../../actions/calculator';
import { Header, NumberDisplay, NumberInput } from '../../components';
import NavigationLink from '../../components/navigation-link/navigation-link';
import { RootState } from '../../reducers';
import * as styles from './app.css';

interface Props {
  resultValue: number;
  actions: typeof CalculatorActions;
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component<Props, {}> {
  public render() {
    const { actions, resultValue } = this.props;

    return (
      <div className={styles.app}>
        <Header />
        <NumberInput onChange={actions.editFirstValue} />
        <NumberInput onChange={actions.editSecondValue} />
        <NumberDisplay value={resultValue} />
        <NavigationLink route="/about" text="About page" />
      </div>
    );
  }
}

function mapStateToProps(state: RootState) {
  return {
    resultValue: state.calculator.resultValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CalculatorActions as any, dispatch),
  };
}
