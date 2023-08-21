import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AttendmentsTeamsService } from './list-attendments-team.service';
import { Attendment } from '../attendments.interface';

@Component({
  selector: 'app-list-attendments-team',
  templateUrl: './list-attendments-team.component.html',
  styleUrls: ['./list-attendments-team.component.scss']
})
export class ListAttendmentsTeamComponent implements OnInit {
  team_id: string = '';
  attendmentList!: Attendment[];

  constructor(
    private route: ActivatedRoute,
    private attendmentsTeamsService: AttendmentsTeamsService) { }

  ngOnInit(): void {
    this.team_id = this.route.snapshot.params['team_id'];
    this.getAttendmentsTeam(this.route.snapshot.params['team_id']);
  }

  getAttendmentsTeam = (team_id: string) => {
    this.attendmentsTeamsService.getAttendmentsTeam(team_id).subscribe((response) => {
      this.attendmentList = response;
    });
  };

  changeAttendmentStatus(attendment_id: string) {
    this.attendmentsTeamsService.changeAttendmentStatus(attendment_id, 1).subscribe(() => {
      this.getAttendmentsTeam(this.team_id)
    });
  }

}
