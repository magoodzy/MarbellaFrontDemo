import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNonConformanceComponent } from './add-non-conformance.component';

describe('AddNonConformanceComponent', () => {
  let component: AddNonConformanceComponent;
  let fixture: ComponentFixture<AddNonConformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNonConformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNonConformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
