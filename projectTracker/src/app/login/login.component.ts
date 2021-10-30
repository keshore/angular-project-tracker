import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('asd@asd', [Validators.email, Validators.required]),
    password: new FormControl('asd', Validators.required),
  });
  constructor(public loginService: LoginService) {}
}
