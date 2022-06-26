import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from "../service/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {
  form: FormGroup;
  message: string = '';
  className = 'd-none';
  isProcessing = false;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      'FullName': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'confirm': ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  signup() {
    this.isProcessing = true;
    const data = this.form.value;
    delete data['confirm']
    this.auth.signup(data)
      .subscribe(
        res => {
          if (res.success) {
            this.isProcessing = false;
            this.message = "Account created"
            this.className = 'aler alert-success'
          } else {
            this.isProcessing = false;
            this.message = res.message;
            this.className = 'aler alert-danger'
          }
        },
        (err) => {
          this.isProcessing = false;
          this.message = "server error";
          this.className = 'aler alert-danger'
        }
      )
  }
  getClassName() {
    return this.className;
  }
}
