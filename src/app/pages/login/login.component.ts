import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthenticationService} from '../../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  token: string;
  public user;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      if (params['token']) {
        this.token = params['token'];
      }
    });
  }

  public login() {
    this.loading = true;
    this.authService
      .login(this.loginForm.value)
      .subscribe(() => {
        location.reload(true);
      }, error => {
        this.loading = false;
        if (error instanceof HttpErrorResponse && error.status === 422) {
          Object.keys(error.error.errors).forEach(prop => {
            const formControl = this.loginForm.get(prop);
            if (formControl) {
              formControl.setErrors({
                serverError: error.error.errors[prop]
              });
            }
          });
        }
      });
  }

  ngOnInit() {
    if (this.token) {
      this.authService.saveAccessData({'token': this.token});
      location.reload(true);
    }

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

}
