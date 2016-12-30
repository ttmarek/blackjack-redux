const {
  FACE_CARDS,
  ACE,
} = require('./constants');

function countSelector(drawnCards) {
  return drawnCards.reduce((count, card) => {
    const cardValue = (() => {
      if (FACE_CARDS.includes(card.value)) {
        return 10;
      }
      if (card.value === ACE) {
        const countA = count + 11;
        if (countA > 21) {
          return 1;
        }
        return 11;
      }
      return parseInt(card.value);
    })();

    return count + cardValue;
  }, 0);
}

module.exports = {
  countSelector,
};
