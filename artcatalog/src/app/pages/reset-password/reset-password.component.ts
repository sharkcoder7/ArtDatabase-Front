import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService, private formBuilder: FormBuilder) {
  }

  public send() {
    this.error = '';
    this.loading = true;
    const token = this.route.snapshot.paramMap.get('token');
    this.dataService.resetPassword({
      'password': this.resetForm.value.password,
      'token': token
    }).subscribe((data: any[]) => {
      this.loading = false;
      this.router.navigate(['/login']);
    }, error => {
      this.loading = false;
    });
  }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.resetForm.controls;
  }

}
