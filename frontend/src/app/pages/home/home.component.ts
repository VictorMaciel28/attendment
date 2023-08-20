import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}
  title = 'Home';

  navigateToTeamAtendimentos(team_id: String){
    console.log(team_id);
    
    this.router.navigate(['/attendments/team', team_id]);
  }
}


