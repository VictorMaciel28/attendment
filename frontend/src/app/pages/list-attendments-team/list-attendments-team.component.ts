import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AttendmentsTeamsService } from './list-attendments-team.service';
import { Team } from '../list-attendments-team/list-attendments-team.interface';
import { Attendment } from '../list-attendments-team/list-attendments-team.interface';

@Component({
  selector: 'app-list-attendments-team',
  templateUrl: './list-attendments-team.component.html',
  styleUrls: ['./list-attendments-team.component.scss']
})
export class ListAttendmentsTeamComponent implements OnInit {
  team_id: String = '';
  attendmentList!: Attendment[];

  constructor(
    private route: ActivatedRoute,
    private attendmentsTeamsService: AttendmentsTeamsService) {}

  ngOnInit(): void {
    this.team_id = this.route.snapshot.params['team_id'];
    this.getAttendmentsTeam(this.route.snapshot.params['team_id']);
  }

  getAttendmentsTeam = (team_id: String) => {
    this.attendmentsTeamsService.getAttendmentsTeam(team_id).subscribe((response) => {
      this.attendmentList = response;
      console.log(response);
      
    });
  };

  changeAttendmentStatus(team_id: String){
    console.log(team_id);
  }

  paragraphs = [
    {
      text: 'Texto do primeiro parágrafo',
      buttonText: 'Botão 1'
    },
    {
      text: 'Texto do segundo parágrafo',
      buttonText: 'Botão 2'
    },
    {
      text: 'Texto do terceiro parágrafo',
      buttonText: 'Botão 3'
    }
  ];

}
