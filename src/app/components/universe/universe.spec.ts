import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Universe } from './universe';

describe('Universe', () => {
  let component: Universe;
  let fixture: ComponentFixture<Universe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Universe]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Universe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
