import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  navLinks = [
    { path: 'login', label: 'Login' },
    { path: 'registration', label: 'Registration' },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  public loginWith(api: string) {
    return this.authService.loginWith(api).subscribe(data => console.log(data));
  }
}
