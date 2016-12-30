const Redux = require('redux');
const { reducer } = require('./reducer');
const { render } = require('./render');
const {
  getDeck,
  drawCard,
} = require('./actions');

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const state = store.getState();
  render(state);
});

getDeck(store.dispatch);

document.getElementById('hit-me-btn').addEventListener('click', () => {
  const deckId = store.getState().deckId;
  drawCard(store.dispatch, deckId);
});
