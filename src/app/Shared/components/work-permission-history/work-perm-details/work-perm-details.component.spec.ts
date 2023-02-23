import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPermDetailsComponent } from './work-perm-details.component';

describe('WorkPermDetailsComponent', () => {
  let component: WorkPermDetailsComponent;
  let fixture: ComponentFixture<WorkPermDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPermDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPermDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
