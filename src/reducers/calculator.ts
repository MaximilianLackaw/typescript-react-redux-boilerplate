import { handleActions } from 'redux-actions';
import { EDIT_FIRSTVALUE, EDIT_SECONDVALUE } from '../constants/actions';

const initialState: CalculatorStoreState = {
  firstInputValue: 0,
  secondInputValue: 0,
  resultValue: 0,
};

export default handleActions<CalculatorStoreState, number>(
  {
    [EDIT_FIRSTVALUE]: (state, action) => {
      const newFirstValue = action.payload;
      return {
        ...state,
        firstInputValue: newFirstValue,
        resultValue: newFirstValue + state.secondInputValue,
      };
    },
    [EDIT_SECONDVALUE]: (state, action) => {
      const newSecondValue = action.payload;
      return {
        ...state,
        secondInputValue: newSecondValue,
        resultValue: state.firstInputValue + newSecondValue,
      };
    },
  },
  initialState,
);
