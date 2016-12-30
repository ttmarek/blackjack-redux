const Redux = require('redux');
const { reducer } = require('./reducer');
const { renderUI } = require('./render-ui');
const {
  getDeck,
  drawCard,
} = require('./actions');
const { countSelector } = require('./selectors');

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const {
    deckId,
    drawnCards,
  } = store.getState();

  const count = countSelector(drawnCards);

  renderUI(deckId, drawnCards, count);
});

getDeck(store.dispatch);

document.getElementById('hit-me-btn').addEventListener('click', () => {
  const deckId = store.getState().deckId;
  drawCard(store.dispatch, deckId);
});
