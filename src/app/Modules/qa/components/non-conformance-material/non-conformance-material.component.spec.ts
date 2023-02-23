import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonConformanceMaterialComponent } from './non-conformance-material.component';

describe('NonConformanceMaterialComponent', () => {
  let component: NonConformanceMaterialComponent;
  let fixture: ComponentFixture<NonConformanceMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonConformanceMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonConformanceMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
