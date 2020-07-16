import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataControlService {
  api = '/user';
  apiP = '/portfolio';

  constructor(private http: HttpClient) {

  }

  getUserInfo(): Observable<any>{
    return this.http.get(this.api + '/me');
  }

  getAllEducation(): Observable<any> {
    return this.http.get(this.api + '/education');
  }

  getAllExperience(): Observable<any> {
    return this.http.get(this.api + '/experience');
  }

  getAllSkills(): Observable<any> {
    return this.http.get(this.api + '/skills');
  }

  getAllProjects(): Observable<any> {
    return this.http.get(this.api + '/projects');
  }

  getProjectsByTypePagination(url: string) {
    return this.http.get(this.apiP + url);
  }

  sendMessage(message: any) {
    return this.http.post(this.api + '/sent/email', message);
  }
}
