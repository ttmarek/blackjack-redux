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

module.exports = {
  getDeck,
};
