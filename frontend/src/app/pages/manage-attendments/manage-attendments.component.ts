import { Component, OnInit, ViewChild } from '@angular/core';
import { Attendment, Team } from '../attendments.interface';
import { ManageAttendmentsService } from './manage-attendments.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-manage-attendments',
  templateUrl: './manage-attendments.component.html',
  styleUrls: ['./manage-attendments.component.scss']
})
export class ManageAttendmentsComponent implements OnInit {

  @ViewChild('submitAttendmentForm', { static: false }) submitAttendmentForm!: NgForm;
  attendmentInputValue: string = '';
  attendmentList!: Attendment[];
  teams!: Team[];
  selectedSubject: any = null;
  resultMessage!: string;
  resultMessageColor!: string;

  constructor(
    private manageAttendmentsService: ManageAttendmentsService
  ) { }

  ngOnInit(): void {
    this.getDelayedAttendments();
    this.getTeams();
  }

  getDelayedAttendments = () => {
    this.manageAttendmentsService.getDelayedAttendments().subscribe((response) => {
      this.attendmentList = response;
    });
  };

  getTeams() {
    this.manageAttendmentsService.getTeams().subscribe((response) => {
      this.teams = response;
    });
  };

  submitAttendment = () => {
    this.manageAttendmentsService.submitAttendment(this.selectedSubject, this.attendmentInputValue).subscribe(() => {
      this.selectedSubject = null;
      this.submitAttendmentForm.resetForm();
      this.resultMessage = "Submetido com sucesso!";
      this.resultMessageColor = "success-text";
      this.getDelayedAttendments();
    }, (error: HttpErrorResponse) => {
      this.resultMessage = error.message;
      this.resultMessageColor = "error-text";
    })
  }

}
