import { StripSpecialCharsPipe } from './strip-special-chars.pipe';

describe('StripSpecialCharsPipe', () => {
  it('create an instance', () => {
    const pipe = new StripSpecialCharsPipe();
    expect(pipe).toBeTruthy();
  });
});
