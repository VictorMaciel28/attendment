import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAttendmentsTeamComponent } from './list-attendments-team.component';

describe('ListAttendmentsTeamComponent', () => {
  let component: ListAttendmentsTeamComponent;
  let fixture: ComponentFixture<ListAttendmentsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAttendmentsTeamComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAttendmentsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
