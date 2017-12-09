import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const editFirstValue = createAction<any>(Actions.EDIT_FIRSTVALUE);
export const editSecondValue = createAction<any>(Actions.EDIT_SECONDVALUE);
