const nock = require('nock');
const {
  getDeck,
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
