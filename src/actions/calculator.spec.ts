import { Action } from 'redux-actions';
import * as actions from '../actions/calculator';
import { EDIT_FIRSTVALUE, EDIT_SECONDVALUE } from '../constants/actions';

describe('calculator actions', () => {
  let action: Action<number>;

  describe('When editing the first value', () => {
    beforeEach(() => {
      action = actions.editFirstValue(5);
    });

    it('should return have "EDIT_FIRSTVALUE" as type', () => {
      expect(action.type).toBe(EDIT_FIRSTVALUE);
    });

    it('should return the original input parameter as payload', () => {
      expect(action.payload).toBe(5);
    });
  });

  describe('When editing the second value', () => {
    beforeEach(() => {
      action = actions.editSecondValue(23);
    });

    it('should return have "EDIT_SECONDVALUE" as type', () => {
      expect(action.type).toBe(EDIT_SECONDVALUE);
    });

    it('should return the original input parameter as payload', () => {
      expect(action.payload).toBe(23);
    });
  });
});
