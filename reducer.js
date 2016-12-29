const {
  GET_DECK_SUCCESS,
} = require('./constants');

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DECK_SUCCESS:
      return { deckId: action.payload };
    default:
      return state;
  }
}

module.exports = { reducer };
