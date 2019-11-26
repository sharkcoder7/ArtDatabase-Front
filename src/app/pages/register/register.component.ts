import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private formBuilder: FormBuilder) {
  }

  public register() {
    if (this.registerForm.invalid) {
      alert('Form is not valid');
    }

    this.dataService.register(this.registerForm.value).subscribe((data: any[]) => {
      this.router.navigate(['/login']);
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

  get f() { return this.registerForm.controls; }
}
