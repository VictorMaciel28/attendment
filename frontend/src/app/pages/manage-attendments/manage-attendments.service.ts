import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Attendment, Team } from '../attendments.interface';

@Injectable({
  providedIn: 'root',
})
export class ManageAttendmentsService {

  constructor(private http: HttpClient) { }

  URL = environment.apiURL;

  getDelayedAttendments() {
    const url = `${this.URL}/pending-attendments`;
    return this.http.get<Attendment[]>(url, {});
  }

  getTeams() {
    return this.http.get<Team[]>(this.URL + '/teams');
  }

  submitAttendment(team_id: string, description: string,) {
    return this.http.post<Attendment[]>(this.URL + '/attendment', {
      team_id,
      description
    });
  }

}
