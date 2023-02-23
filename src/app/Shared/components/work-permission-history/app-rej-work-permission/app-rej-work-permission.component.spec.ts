import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRejWorkPermissionComponent } from './app-rej-work-permission.component';

describe('AppRejWorkPermissionComponent', () => {
  let component: AppRejWorkPermissionComponent;
  let fixture: ComponentFixture<AppRejWorkPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRejWorkPermissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRejWorkPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
