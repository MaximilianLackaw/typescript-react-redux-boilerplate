import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: CalculatorStoreState = {
  firstInputValue: 0,
  secondInputValue: 0,
  resultValue: 0,
};

export default handleActions<CalculatorStoreState, number>(
  {
    [Actions.EDIT_FIRSTVALUE]: (state, action) => {
      return {
        ...state,
        firstInputValue: action.payload,
        resultValue: action.payload + state.secondInputValue,
      };
    },
    [Actions.EDIT_SECONDVALUE]: (state, action) => {
      return {
        ...state,
        secondInputValue: action.payload,
        resultValue: state.firstInputValue + action.payload,
      };
    },
  },
  initialState,
);
