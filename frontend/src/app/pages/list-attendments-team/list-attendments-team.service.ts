import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Attendment } from '../attendments.interface';

@Injectable({
  providedIn: 'root',
})
export class AttendmentsTeamsService {
  constructor(private http: HttpClient) { }

  URL = environment.apiURL;


  getAttendmentsTeam(team_id: string) {
    const url = `${this.URL}/team/${team_id}/attendments`;
    return this.http.get<Attendment[]>(url, {});
  }

  changeAttendmentStatus(attendment_id: string, status: number) {
    return this.http.put<Task[]>(this.URL + `/attendment/${attendment_id}`, {
      status
    });
  }

  /*getListCompleted() {
    return this.http.get<Task[]>(this.URL + '/tasks/completed');
  }

  submitNewTask(name: string, description: string) {
    return this.http.post<Task[]>(this.URL + '/tasks', {
      name,
      description,
      active: true,
    });
  }

  submitEditTask(id: string, name: string, description: string) {
    console.log(id);

    return this.http.put<Task[]>(this.URL + '/tasks', {
      id,
      name,
      description,
    });
  }

  changeStatus(id: string, active: boolean) {
    return this.http.put<Task[]>(this.URL + '/task/' + id, { active: active });
  }

  deleteTask(id: string) {
    return this.http.delete<Task[]>(this.URL + '/task/' + id);
  }*/
}
