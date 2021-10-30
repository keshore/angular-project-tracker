import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  protected projects: any = [];
  constructor(private http: HttpClient) {}

  createProject(body: any) {
    this.http.post('http://localhost:3000/projects', body).subscribe(
      (data) => {
        console.log(data);
        this.projects = data;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
