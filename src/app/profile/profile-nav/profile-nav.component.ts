import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent implements OnInit {

  navLeft = ['Timeline', 'About', 'Friends'];
  navRight = ['Photos', 'Videos'];
  user = 'James Spiegel';
  location = 'San Francisko, CA';

  constructor() { }

  ngOnInit() {
  }

}
