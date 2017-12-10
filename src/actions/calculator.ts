import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

function identity<T>(arg: T): T {
  return arg;
}

export const editFirstValue = createAction<number, number>(Actions.EDIT_FIRSTVALUE, identity);

export const editSecondValue = createAction<number, number>(Actions.EDIT_SECONDVALUE, identity);
