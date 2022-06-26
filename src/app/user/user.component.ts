import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupName } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.form = this.fb.group({
      'displayName':['', Validators.required],
      'email':['', Validators.required],
      'password':['', Validators.required],
      'confirm':['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  login() {
    const data = this.form.value;
    this.authService.signin(data)
    .subscribe(
      res => {
        if(res.success){
          localStorage.setItem('token', res.token)
          this.router.navigate(['/profile'])
        }else{
          alert(res.message)
        }
      },
      (err) => {
        alert("login failed")
      }
    )
  }

}
