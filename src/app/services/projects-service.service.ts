import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {
  url: string = 'https://api.github.com/users/runscible/repos';
  constructor(private http : HttpClient) { }
  getProjects(){
    return this.http.get(this.url);
  }
}
