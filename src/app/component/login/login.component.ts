import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  login() {
    if (this.email == '') {
      alert('please enter your email');
      return;
    } else if (this.password == '') {
      alert('please enter your password');
      return;
    }
    this.auth.login(this.email, this.password);
    
    this.email = '';
    this.password = '';
  }
  signInWithGoogle(){
    this.auth.googleSignIn()
  }
}
