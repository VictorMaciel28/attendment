import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Team } from '../attendments.interface';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) { }

  URL = environment.apiURL;

  getTeams() {
    return this.http.get<Team[]>(this.URL + '/teams');
  }
}
