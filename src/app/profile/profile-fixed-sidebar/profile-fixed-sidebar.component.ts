import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-fixed-sidebar',
  templateUrl: './profile-fixed-sidebar.component.html',
  styleUrls: ['./profile-fixed-sidebar.component.scss']
})
export class ProfileFixedSidebarComponent implements OnInit {

  icons = [
    'align-justify',
    'asterisk',
    'book-open',
    'bolt',
    'bullseye',
    'chart-bar',
    'asterisk',
    'book-open',
    'bolt',
    'bullseye',
    'chart-bar'
  ];

  users = [
    {url: 'assets/images/avatar-image-1.jpg', status: 'online'},
    {url: 'assets/images/avatar-image-2.jpg', status: 'away'},
    {url: 'assets/images/avatar-image-3.jpg', status: 'offline'},
    {url: 'assets/images/avatar-image-4.jpg', status: 'online'},
    {url: 'assets/images/avatar-image-5.jpg', status: 'online'},
    {url: 'assets/images/avatar-image-6.jpg', status: 'away'},
    {url: 'assets/images/avatar-image-7.jpg', status: 'online'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
