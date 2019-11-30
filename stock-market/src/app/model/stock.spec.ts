import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock('test stock', 'ts', 10, 8)).toBeTruthy();
  });
});
