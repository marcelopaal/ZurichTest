import { TestBed } from '@angular/core/testing';

import { Apiauth } from './apiauth';

describe('Apiauth', () => {
  let service: Apiauth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apiauth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
