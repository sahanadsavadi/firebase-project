import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-varify-email',
  templateUrl: './varify-email.component.html',
  styleUrls: ['./varify-email.component.scss'],
})
export class VarifyEmailComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  Register() {}
}
