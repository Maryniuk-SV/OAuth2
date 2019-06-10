import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {}
}
