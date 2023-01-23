import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss']
})
export class RegistrComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  Register() {
    if (this.email == '') {
      alert('please enter your email');
      return;
    } else if (this.email == '') {
      alert('please enter your password');
      return;
    }
    this.auth.register(this.email, this.password);
    
    this.email = '';
    this.password = '';
  }
}
