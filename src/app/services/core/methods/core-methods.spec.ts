import { TestBed } from '@angular/core/testing';

import { CoreMethods } from './core-methods';

describe('CoreMethods', () => {
  let service: CoreMethods;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreMethods);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
