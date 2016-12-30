const nock = require('nock');
const {
  getDeck,
  drawCard,
} = require('../actions');

describe('Action: getDeck(dispatch)', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('When the request is successful', () => {
    it('dispatches the GET_DECK_SUCCESS event with the deck Id.', () => {
      nock('https://deckofcardsapi.com')
        .get('/api/deck/new/shuffle/?deck_count=6')
        .reply(200, {
          "success": true,
          "deck_id": "3p40paa87x90",
          "shuffled": true,
          "remaining": 52
        });

      const expected = {
        type: 'GET_DECK_SUCCESS',
        payload: '3p40paa87x90',
      };
      const dispatch = jest.fn();
      return getDeck(dispatch)
        .then(() => {
          expect(dispatch).toHaveBeenCalledWith(expected);
        });
    });
  });
});

describe('Action: drawCard(dispatch)', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  describe('When the request is successful', () => {
    it('dispatches DRAW_CARD_SUCCESS event with the card object', () => {
      nock('https://deckofcardsapi.com')
        .get('/api/deck/3p40paa87x90/draw/?count=1')
        .reply(200, {
          "success": true,
          "cards": [
            {
              "image": "https://deckofcardsapi.com/static/img/KH.png",
              "value": "KING",
              "suit": "HEARTS",
              "code": "KH"
            }
          ],
          "deck_id":"3p40paa87x90",
          "remaining": 50
        });

      const dispatch = jest.fn();

      return drawCard(dispatch, '3p40paa87x90')
        .then(() => {
          expect(dispatch).toHaveBeenCalledWith({
            type: 'DRAW_CARD_SUCCESS',
            payload: {
              card: {
                "image": "https://deckofcardsapi.com/static/img/KH.png",
                "value": "KING",
                "suit": "HEARTS",
                "code": "KH"
              },
              cardsRemainingInDeck: 50,
            },
          });
        });
    });
  });
});
