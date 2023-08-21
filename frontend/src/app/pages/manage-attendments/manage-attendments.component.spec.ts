import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAttendmentsComponent } from './manage-attendments.component';

describe('ManageAttendmentsComponent', () => {
  let component: ManageAttendmentsComponent;
  let fixture: ComponentFixture<ManageAttendmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAttendmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAttendmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
