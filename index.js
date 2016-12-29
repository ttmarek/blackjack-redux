const Redux = require('redux');
const { reducer } = require('./reducer');
const { render } = require('./view');
const {
  getDeck,
} = require('./actions');

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const state = store.getState();
  render(state.deckId);
});

getDeck(store.dispatch);
