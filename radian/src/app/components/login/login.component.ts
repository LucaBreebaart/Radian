import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../app.component.css']
})
export class LoginComponent {

  constructor(private service: AuthService, private router: Router) { }

  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    // Validation
    if (this.login.value.email != "" && this.login.value.password != "") {

      //TODO: Call Auth Service
      this.service.loginUser(this.login.value.email!, this.login.value.password!).subscribe((success) => {
        if (success) {
          // If login success navigate to inventory
          this.router.navigateByUrl("/");
        } else{
          // add validation here
        }
      })
    }
  }
}
