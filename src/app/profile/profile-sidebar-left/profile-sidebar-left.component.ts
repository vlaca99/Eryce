import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar-left',
  templateUrl: './profile-sidebar-left.component.html',
  styleUrls: ['./profile-sidebar-left.component.scss']
})
export class ProfileSidebarLeftComponent implements OnInit {

  badges = [
    {badgeUrl: 'assets/images/badges/badge1.png', ammount: '2', bgClass: 'bg-primary'},
    {badgeUrl: 'assets/images/badges/badge2.png', ammount: '', bgClass: ''},
    {badgeUrl: 'assets/images/badges/badge3.png', ammount: '4', bgClass: 'bg-blue'},
    {badgeUrl: 'assets/images/badges/badge4.png', ammount: '', bgClass: ''},
    {badgeUrl: 'assets/images/badges/badge5.png', ammount: '', bgClass: ''},
    {badgeUrl: 'assets/images/badges/badge6.png', ammount: '', bgClass: ''},
    {badgeUrl: 'assets/images/badges/badge7.png', ammount: '', bgClass: ''},
    {badgeUrl: 'assets/images/badges/badge8.png', ammount: '2', bgClass: 'bg-light-green'},
    {badgeUrl: 'assets/images/badges/badge9.png', ammount: '', bgClass: ''},
  ];

  playlist = [
    {
      imageUrl: 'assets/images/playlist-images/playlist1.jpg',
      title: 'The Past Starts Slow...',
      artist: 'System of a Revenge',
      time: '3:22'
    },
    {
      imageUrl: 'assets/images/playlist-images/playlist2.jpg',
      title: 'The Pretender',
      artist: 'Kung Fighters',
      time: '5:48'
    },
    {
      imageUrl: 'assets/images/playlist-images/playlist3.jpg',
      title: 'Blood Brothers',
      artist: 'Iron Maid',
      time: '3:06'
    },
    {
      imageUrl: 'assets/images/playlist-images/playlist4.jpg',
      title: 'Seven Nation Army',
      artist: 'The Black Stripes',
      time: '6:17'
    },
    {
      imageUrl: 'assets/images/playlist-images/playlist5.jpg',
      title: 'Killer Queen',
      artist: 'Archiduke',
      time: '5:40'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
