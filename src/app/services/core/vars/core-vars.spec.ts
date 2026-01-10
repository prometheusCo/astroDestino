import { TestBed } from '@angular/core/testing';

import { CoreVars } from './core-vars';

describe('CoreVars', () => {
  let service: CoreVars;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreVars);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
