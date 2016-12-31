const { reducer } = require('../reducer');
const {
  GET_DECK_SUCCESS,
  DRAW_CARD_SUCCESS,
} = require('../constants');

describe('reducer(state, action)', () => {
  describe('On GET_DECK_SUCCESS', () => {
    it('hydrates the state with the new deck Id.', () => {
      const action = {
        type: GET_DECK_SUCCESS,
        payload: '3p40paa87x90',
      };
      const state = { deckId: undefined };

      const expectedState = {
        deckId: '3p40paa87x90',
      };
      const actualState = reducer(state, action);

      expect(actualState).toEqual(expectedState);
    });
  });

  describe('On DRAW_CARD_SUCCESS', () => {
    describe('When there are no cards', () => {
      const action = {
        type: DRAW_CARD_SUCCESS,
        payload: {
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "value": "KING",
          "suit": "HEARTS",
          "code": "KH"
        },
      };
      const state = {
        drawnCards: [],
      };

      const newState = reducer(state, action);

      it('hydrates the state with the card object', () => {
        expect(newState.drawnCards).toEqual([{
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "value": "KING",
          "suit": "HEARTS",
          "code": "KH"
        }]);
      });
    });

    describe('When there are already drawn cards', () => {
      const action = {
        type: DRAW_CARD_SUCCESS,
        payload: {
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "value": "KING",
          "suit": "HEARTS",
          "code": "KH"
        },
      };
      const state = {
        drawnCards: [{
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "value": "KING",
          "suit": "HEARTS",
          "code": "KH"
        }],
      };

      const newState = reducer(state, action);

      it('hydrates the state with the card object (leaving existing cards)', () => {
        expect(newState.drawnCards).toEqual([
          {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
          },
          {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
          }
        ]);
      });
    });
  });
});
