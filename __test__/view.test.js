const {
  render,
} = require('../view');

describe('render(deckId)', () => {
  beforeEach(() => {
    // setup
    document.body.innerHTML =
      `<div id="messages"></div>
    <div class="container">
      <div id="count"></div>
    </div>
    <div class="container">
      <button id="hit-me-btn" disabled>Hit Me!</button>
    </div>
    <div class="container">
      <div id="hand">
        <img src="https://deckofcardsapi.com/static/img/8C.png" />
      </div>
    </div>`;
  });

  describe('When the deckId is defined', () => {
    it('the hit-me button is enabled', () => {
      // test
      render('239dkfkj93');

      // assert
      const btn = document.getElementById('hit-me-btn');
      expect(btn.disabled).toBe(false);
    });

    it('the deck Id. is displayed in the messages bar', () => {
      // test
      render('239dkfkj93');

      // assert
      const messages = document.getElementById('messages');
      expect(messages.innerHTML).toEqual('<div>Playing With Deck: 239dkfkj93</div>');
    });
  });
});
