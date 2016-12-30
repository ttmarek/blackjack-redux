function renderUI(deckId, drawnCards, count) {
  if (deckId !== undefined) {
    const hitMeBtn = document.getElementById('hit-me-btn');
    const messages = document.getElementById('messages');
    hitMeBtn.disabled = false;
    messages.innerHTML = `<div>Playing With Deck: ${deckId}`;
  }
  if (drawnCards !== undefined && drawnCards.length > 0) {
    const hand = document.getElementById('hand');
    const images = drawnCards.map(card => `<img src="${card.image}">`);
    hand.innerHTML = images.join(' ');
  }
  if (count !== undefined) {
    const countContainer = document.getElementById('count');
    const hitMeBtn = document.getElementById('hit-me-btn');

    countContainer.textContent = count;

    if (count > 21) {
      hitMeBtn.disabled = true;
    }
  }
}

module.exports = { renderUI };
