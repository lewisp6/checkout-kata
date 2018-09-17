const checkout = require('./../src/checkout');

describe('scan', () => {
  it('should 0 given no price', () => {
    expect(checkout.scan()).toBe(0);
  });

  it('should return 50 given item A', () => {
    expect(checkout.scan(['A'])).toBe(50);
  });

  it('should return 80 given items A and B', () => {
    expect(checkout.scan(['A', 'B'])).toBe(80);
  });

  it('should return 115 given CDBA', () => {
    expect(checkout.scan(['C', 'D', 'B', 'A'])).toBe(115);
  });

  it('should return 100 given AA', () => {
    expect(checkout.scan(['A', 'A'])).toBe(100);
  });

  it('should return 130 given AAA', () => {
    expect(checkout.scan(['A', 'A', 'A'])).toBe(130);
  });

  it('should return 180 given AAAA', () => {
    expect(checkout.scan(['A', 'A', 'A', 'A'])).toBe(180);
  });

  it('should return 230 given AAAAA', () => {
    expect(checkout.scan(['A', 'A', 'A', 'A', 'A'])).toBe(230);
  });

  it('should return 230 given AAAAAA', () => {
    expect(checkout.scan(['A', 'A', 'A', 'A', 'A', 'A'])).toBe(260);
  });
});
