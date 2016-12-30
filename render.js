function render(state) {
  if (state.deckId !== undefined) {
    const hitMeBtn = document.getElementById('hit-me-btn');
    const messages = document.getElementById('messages');
    hitMeBtn.disabled = false;
    messages.innerHTML = `<div>Playing With Deck: ${state.deckId}`;
  }
  if (state.drawnCards !== undefined && state.drawnCards.length > 0) {
    const hand = document.getElementById('hand');
    const images = state.drawnCards.map(card => `<img src="${card.image}">`);
    hand.innerHTML = images.join(' ');
  }
}

module.exports = { render };
