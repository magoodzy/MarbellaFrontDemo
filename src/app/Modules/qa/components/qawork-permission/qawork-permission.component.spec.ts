import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAWorkPermissionComponent } from './qawork-permission.component';

describe('QAWorkPermissionComponent', () => {
  let component: QAWorkPermissionComponent;
  let fixture: ComponentFixture<QAWorkPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QAWorkPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QAWorkPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
