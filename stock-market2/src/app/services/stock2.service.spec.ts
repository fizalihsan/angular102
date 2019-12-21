import { TestBed } from '@angular/core/testing';

import { Stock2Service } from './stock2.service';

describe('Stock2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Stock2Service = TestBed.get(Stock2Service);
    expect(service).toBeTruthy();
  });
});
