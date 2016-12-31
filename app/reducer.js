const {
  GET_DECK_SUCCESS,
  DRAW_CARD_SUCCESS,
} = require('./constants');

const initialState = {
  deckId: undefined,
  drawnCards: [],
};

function reducer(state = initialState, action) {
  const update = sliceOfState => Object.assign({}, state, sliceOfState);

  switch (action.type) {
    case GET_DECK_SUCCESS:
      return update({ deckId: action.payload });
    case DRAW_CARD_SUCCESS:
      return update({
        drawnCards: state.drawnCards.concat(action.payload),
      });
    default:
      return state;
  }
}

module.exports = { reducer };
