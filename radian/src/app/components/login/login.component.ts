// login.component.ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RecaptchaModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../app.component.css']
})
export class LoginComponent {
  captchaResolved: boolean = false;

  constructor(private service: AuthService, private router: Router) { }

  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    // Check if reCAPTCHA is resolved
    if (!this.captchaResolved) {
      console.log("Please resolve reCAPTCHA.");
      return;
    }

    // Continue with form submission
    if (this.login.value.email != "" && this.login.value.password != "") {
      this.service.loginUser(this.login.value.email!, this.login.value.password!).subscribe((success) => {
        if (success) {
          // If login success navigate to inventory
          this.router.navigateByUrl("/");
        } else {
          // Handle login failure
          console.log("Login failed.");
        }
      })
    }
  }

  resolved(captchaResponse: string | null) {
    // Handle reCAPTCHA resolved event
    if (captchaResponse) {
      console.log(`Resolved reCAPTCHA with response: ${captchaResponse}`);
      this.captchaResolved = true;
    } else {
      console.log("reCAPTCHA not resolved.");
      this.captchaResolved = false;
    }
  }
}
