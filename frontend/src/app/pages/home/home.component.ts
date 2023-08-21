import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamsService } from './home.service';
import { Team } from '../attendments.interface';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public router: Router,
    private teamsService: TeamsService) { }
  title = 'Home';
  teams!: Team[];

  navigateToTeamAtendimentos(team_id: String) {
    this.router.navigate(['/attendments/team', team_id]);
  }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams() {
    this.teamsService.getTeams().subscribe((response) => {
      this.teams = response;
    });
  };
}


