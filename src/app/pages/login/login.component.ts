import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  login(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.authenticate(email, password).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        console.error('Erro no login',error);
      }
    })
    console.log(this.loginForm.value);
  }

}
