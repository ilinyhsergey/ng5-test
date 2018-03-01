import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signin: FormGroup;

  error: string;

  constructor(private apiService: ApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.signin = new FormGroup({
      email: new FormControl('developertest@amalyze.com', Validators.required),
      password: new FormControl('Iilo1ail', Validators.required),
      captcha: new FormControl(),
    });
  }

  submit() {
    const username = this.signin.get('email').value;
    const password = this.signin.get('password').value;
    const captcha = this.signin.get('captcha').value;

    this.apiService.login(username, password, captcha)
      .subscribe((res) => {
        this.router.navigate(['status']);
      }, (err) => {
        this.error = err;
      });
  }

}
