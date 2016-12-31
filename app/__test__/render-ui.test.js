const {
  renderUI,
} = require('../render-ui');

describe('renderUI(deckId, drawnCard, count)', () => {
  beforeEach(() => {
    document.body.innerHTML =
      `<div id="messages"></div>
    <div class="container">
      <div id="count"></div>
    </div>
    <div class="container">
      <button id="hit-me-btn" disabled>Hit Me!</button>
    </div>
    <div class="container">
      <div id="hand"></div>
    </div>`;
  });

  describe('When the deckId is defined', () => {
    it('the hit-me button is enabled', () => {
      // setup
      const deckId = '239dkfkj93';

      // test
      renderUI(deckId);

      // assert
      const btn = document.getElementById('hit-me-btn');
      expect(btn.disabled).toBe(false);
    });

    it('the deck Id. is displayed in the messages bar', () => {
      // setup
      const deckId = '239dkfkj93';

      // test
      renderUI(deckId);

      // assert
      const messages = document.getElementById('messages');
      expect(messages.innerHTML).toEqual('<div>Playing With Deck: 239dkfkj93</div>');
    });
  });

  describe('When there is one drawn card', () => {
    it('displays the drawn card', () => {
      // setup
      const drawnCards = [{
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "value": "KING",
          "suit": "HEARTS",
          "code": "KH"
      }];

      // test
      renderUI(undefined, drawnCards);

      // assert
      const hand = document.getElementById('hand');
      expect(hand.innerHTML).toEqual('<img src="https://deckofcardsapi.com/static/img/KH.png">');
    });
  });

  describe('When there are multiple drawn cards', () => {
    it('displays all drawn cards in the order that they were drawn', () => {
      // setup
      const drawnCards = [
          {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
          },
          {
            "image": "https://deckofcardsapi.com/static/img/8C.png",
            "value": "8",
            "suit": "CLUBS",
            "code": "8C"
          }
      ];

      // test
      renderUI(undefined, drawnCards);

      // assert
      const hand = document.getElementById('hand');
      expect(hand.innerHTML.includes('<img src="https://deckofcardsapi.com/static/img/KH.png">')).toBe(true);
      expect(hand.innerHTML.includes('<img src="https://deckofcardsapi.com/static/img/8C.png">')).toBe(true);
    });
  });

  describe('When a hand count is defined', () => {
    it('displays the total count', () => {
      // setup
      const count = 20;

      // test
      renderUI(undefined, undefined, count);

      // assert
      const countContainer = document.getElementById('count');
      expect(countContainer.textContent).toEqual('20');
    });

    describe('When the hand count is greater than 31', () => {
      it('disables the hit-me button', () => {
        // setup
        const deckId = 'lksd9023u';
        const count = 22;

        // test
        renderUI(deckId, undefined, count);

        const btn = document.getElementById('hit-me-btn');
        expect(btn.disabled).toBe(true);
      });

      it('displays "BUST!" in the message bar', () => {
        // setup
        const deckId = 'lksd9023u';
        const count = 22;

        // test
        renderUI(deckId, undefined, count);

        const messages = document.getElementById('messages');
        expect(messages.innerHTML.includes('BUST!')).toBe(true);
      });
    });
  });
});
