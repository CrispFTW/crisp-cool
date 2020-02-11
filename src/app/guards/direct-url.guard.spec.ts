import { TestBed, async, inject } from '@angular/core/testing';

import { DirectUrlGuard } from './direct-url.guard';

describe('DirectUrlGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectUrlGuard]
    });
  });

  it('should ...', inject([DirectUrlGuard], (guard: DirectUrlGuard) => {
    expect(guard).toBeTruthy();
  }));
});
