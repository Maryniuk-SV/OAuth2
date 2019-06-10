import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  get password(): AbstractControl {
    return this.form.get('password');
  }

  get email(): AbstractControl {
    return this.form.get('email');
  }

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
    });
  }

  onSubmit() {
    this.router.navigate(['private']);
  }
}
