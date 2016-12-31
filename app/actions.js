require('isomorphic-fetch');

function getDeck(dispatch) {
  return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: 'GET_DECK_SUCCESS',
        payload: response.deck_id,
      });
    });
}

function drawCard(dispatch, deckId) {
  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: 'DRAW_CARD_SUCCESS',
        payload: response.cards[0],
      });
    });
}

module.exports = {
  getDeck,
  drawCard,
};
