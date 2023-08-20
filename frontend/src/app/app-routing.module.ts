import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListAttendmentsTeamComponent } from './pages/list-attendments-team/list-attendments-team.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "attendments/team/:team_id",
    component: ListAttendmentsTeamComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
