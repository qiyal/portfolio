import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../../model/Project';

@Injectable({
  providedIn: 'root'
})

export class DataControlService {
  api = '/user';
  apiP = '/portfolio';

  constructor(private http: HttpClient) {}

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

  getProjectById(id: string): Observable<any> {
    return this.http.get(this.apiP + '/projects/' + id);
  }

  getProjectsByTypePagination(url: string) {
    return this.http.get(this.apiP + url);
  }

  getProjectsMostLike() {
    return this.http.get(this.apiP + '/projects/most-like');
  }

  sendMessage(message: any) {
    return this.http.post(this.api + '/sent/email', message);
  }

  putProjectView(project: Project) {
    return this.http.put(this.apiP + '/projects/update', project);
  }
}
