const {
  deckIdSelector,
} = require('../selectors');

// TODO: This test isn't necessary, the selector isn't useful
describe('deckIdSelector(state)', () => {
  it('returns the deck id', () => {
    const state = {
      deckId: 'ksiduf809432',
    };
    const expected = 'ksiduf809432';
    const actual = deckIdSelector(state);
    expect(actual).toBe(expected);
  });
});
