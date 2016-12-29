const { reducer } = require('../reducer');
const {
  GET_DECK_SUCCESS,
} = require('../constants');

describe('reducer(state, action)', () => {
  describe('On GET_DECK_SUCCESS', () => {
    it('hydrates the state with the new deck Id.', () => {
      const action = {
        type: GET_DECK_SUCCESS,
        payload: '3p40paa87x90',
      };
      const state = {};

      const expectedState = {
        deckId: '3p40paa87x90',
      };
      const actualState = reducer(state, action);

      expect(actualState).toEqual(expectedState);
    });
  });
});
