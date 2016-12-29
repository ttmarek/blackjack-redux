const { axios } = require('axios');

const getNewDeck = count =>
  axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${count}`);

module.exports = {
  getNewDeck,
};
