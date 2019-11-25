import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm: FormGroup;
  loading = false;
  submitted = false;
  public success;
  error: string;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService, private formBuilder: FormBuilder) {
  }

  public send() {
    this.error = '';
    this.loading = true;
    this.dataService.forgetPassword(this.forgetForm.value).subscribe((data: any[]) => {
      this.loading = false;
      this.success = true;
    }, error => {
      this.success = true; // temporary
      this.loading = false;
    });
  }

  ngOnInit() {
    this.forgetForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  get f() {
    return this.forgetForm.controls;
  }

}
