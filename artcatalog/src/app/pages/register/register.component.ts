import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private formBuilder: FormBuilder) {
  }

  public register() {
    this.loading = true;
    this.dataService.register(this.registerForm.value).subscribe((data: any[]) => {
      this.loading = false;
      this.router.navigate(['/login']);
    }, error => {
      this.loading = false;
      if (error instanceof HttpErrorResponse && error.status === 422) {
        Object.keys(error.error.errors).forEach(prop => {
          const formControl = this.registerForm.get(prop);
          if (formControl) {
            formControl.setErrors({
              serverError: error.error.errors[prop].join(' ')
            });
          }
        });
      }
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      isAgree: [true, Validators.required],
      confirmPassword: ['', [Validators.required]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }
}
