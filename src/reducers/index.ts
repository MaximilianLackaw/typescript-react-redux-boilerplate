import { combineReducers } from 'redux';

import calculator from './calculator';

export interface RootState {
  calculator: CalculatorStoreState;
}

export default combineReducers<RootState>({
  calculator,
});
