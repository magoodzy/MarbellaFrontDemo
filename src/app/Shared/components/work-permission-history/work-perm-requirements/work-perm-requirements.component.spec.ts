import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPermRequirementsComponent } from './work-perm-requirements.component';

describe('WorkPermRequirementsComponent', () => {
  let component: WorkPermRequirementsComponent;
  let fixture: ComponentFixture<WorkPermRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPermRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPermRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
