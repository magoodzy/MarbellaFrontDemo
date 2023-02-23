import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPermissionHistoryComponent } from './work-permission-history.component';

describe('WorkPermissionHistoryComponent', () => {
  let component: WorkPermissionHistoryComponent;
  let fixture: ComponentFixture<WorkPermissionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkPermissionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPermissionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
