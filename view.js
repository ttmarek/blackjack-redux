function render(deckId) {
  if (deckId !== undefined) {
    const hitMeBtn = document.getElementById('hit-me-btn');
    const messages = document.getElementById('messages');
    hitMeBtn.disabled = false;
    messages.innerHTML = `<div>Playing With Deck: ${deckId}`;
  }
}

module.exports = { render };
