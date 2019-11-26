import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  public user;
  error: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authServ: AuthService,
    private formBuilder: FormBuilder
  ) {
  }

  public login() {
    this.error = '';
    this.loading = true;
    this.authServ.login(this.loginForm.value).subscribe((data: any[]) => {
      this.loading = false;
      this.user = data;
    }, error => {
      this.error = 'Wrong Credentials!';
      this.loading = false;
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

}
