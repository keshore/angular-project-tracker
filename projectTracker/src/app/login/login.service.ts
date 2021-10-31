import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isAuthenticated: boolean = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  login(body: any): void {
    this.http.post('http://localhost:3000/login', body).subscribe(
      (data) => {
        this.isAuthenticated = true;
        console.log(data);
        this.router.navigate(['/project/list']);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
