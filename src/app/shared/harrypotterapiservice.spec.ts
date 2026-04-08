import { TestBed } from '@angular/core/testing';

import { Harrypotterapiservice } from './harrypotterapiservice';

describe('Harrypotterapiservice', () => {
  let service: Harrypotterapiservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Harrypotterapiservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
