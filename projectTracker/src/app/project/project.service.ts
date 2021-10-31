import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  static = {
    reasonList: ['Business', 'Dealership', 'Transport'],
    typeList: ['Internal', 'External', 'Vendor'],
    divisionList: ['Compressor', 'Filter', 'Pumps', 'Glass', 'Water Heater'],
    categoryList: ['Quality A', 'Quailty B', 'Quality C', 'Quality D'],
    priorityList: ['High', 'low', 'Medium'],
    departmentList: [
      'Strategy',
      'Finance',
      'Quality',
      'Maintenance',
      'Stores',
      'HR',
    ],
    locationList: ['Pune', 'Mumbai', 'Delhi', 'Calcutta', 'Bangalore'],
  };

  projects: projectDetails[] = [];

  private getRandom(arr: string[]) {
    let randomIndex = Math.floor(Math.random() * (arr.length - 0) + 0);
    return arr[randomIndex];
  }
  constructor(private http: HttpClient) {
    for (let index = 0; index < 10; index++) {
      let obj: projectDetails = {
        reason: this.getRandom(this.static.reasonList),
        type: this.getRandom(this.static.typeList),
        division: this.getRandom(this.static.divisionList),
        category: this.getRandom(this.static.categoryList),
        priority: this.getRandom(this.static.priorityList),
        department: this.getRandom(this.static.departmentList),
        location: this.getRandom(this.static.locationList),
      };
      this.projects.push(obj)
    }
  }

  createProject(body: any) {
    this.http
      .post<projectDetails[]>('http://localhost:3000/projects', body)
      .subscribe(
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

export interface projectDetails {
  reason: string;
  type: string;
  division: string;
  category: string;
  priority: string;
  department: string;
  location: string;
}
