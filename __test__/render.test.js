const {
  render,
} = require('../render');

describe('render(state)', () => {
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
      const state = {
        deckId: '239dkfkj93',
      };

      // test
      render(state);

      // assert
      const btn = document.getElementById('hit-me-btn');
      expect(btn.disabled).toBe(false);
    });

    it('the deck Id. is displayed in the messages bar', () => {
      // setup
      const state = {
        deckId: '239dkfkj93',
      };

      // test
      render(state);

      // assert
      const messages = document.getElementById('messages');
      expect(messages.innerHTML).toEqual('<div>Playing With Deck: 239dkfkj93</div>');
    });
  });

  describe('When there is one drawn card', () => {
    it('displays the drawn card', () => {
      // setup
      const state = {
        drawnCards: [{
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "value": "KING",
          "suit": "HEARTS",
          "code": "KH"
        }],
      };

      // test
      render(state);

      // assert
      const hand = document.getElementById('hand');
      expect(hand.innerHTML).toEqual('<img src="https://deckofcardsapi.com/static/img/KH.png">');
    });
  });

  describe('When there are multiple drawn cards', () => {
    it('displays all drawn cards in the order that they were drawn', () => {
      // setup
      const state = {
        drawnCards: [
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
        ],
      };

      // test
      render(state);

      // assert
      const hand = document.getElementById('hand');
      expect(hand.innerHTML.includes('<img src="https://deckofcardsapi.com/static/img/KH.png">')).toBe(true);
      expect(hand.innerHTML.includes('<img src="https://deckofcardsapi.com/static/img/8C.png">')).toBe(true);
    });
  });
});
