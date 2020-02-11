import { FormattedAddressPipe } from './formatted-address.pipe';

describe('FormattedAddressPipe', () => {
  it('create an instance', () => {
    const pipe = new FormattedAddressPipe();
    expect(pipe).toBeTruthy();
  });
});
