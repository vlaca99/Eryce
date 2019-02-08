import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar-right',
  templateUrl: './profile-sidebar-right.component.html',
  styleUrls: ['./profile-sidebar-right.component.scss']
})
export class ProfileSidebarRightComponent implements OnInit {

  latestPhotos = [
    {url: 'assets/images/Last photos/photo-1.jpg'},
    {url: 'assets/images/Last photos/photo-2.jpg'},
    {url: 'assets/images/Last photos/photo-3.jpg'},
    {url: 'assets/images/Last photos/photo-4.jpg'},
    {url: 'assets/images/Last photos/photo-5.jpg'},
    {url: 'assets/images/Last photos/photo-6.jpg'},
    {url: 'assets/images/Last photos/photo-7.jpg'},
    {url: 'assets/images/Last photos/photo-8.jpg'},
    {url: 'assets/images/Last photos/photo-9.jpg'}
  ];

  blogPosts = [
    {
      title: 'My Perfect Vacations in South America and Europe',
      description: 'Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.',
      time: '7 hours ago'
    },
    {
      title: 'The Big Experience of Travelling Alone',
      description: 'Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.',
      time: 'March 18th, at 6:25pm'
    }
  ];

  friends = [
    {url: 'assets/images/avatar-image-1.jpg'},
    {url: 'assets/images/avatar-image-2.jpg'},
    {url: 'assets/images/avatar-image-3.jpg'},
    {url: 'assets/images/avatar-image-4.jpg'},
    {url: 'assets/images/avatar-image-5.jpg'},
    {url: 'assets/images/avatar-image-6.jpg'},
    {url: 'assets/images/avatar-image-7.jpg'},
    {url: 'assets/images/avatar-image-1.jpg'},
    {url: 'assets/images/avatar-image-2.jpg'},
    {url: 'assets/images/avatar-image-3.jpg'},
    {url: 'assets/images/avatar-image-4.jpg'},
    {url: 'assets/images/avatar-image-5.jpg'},
    {url: 'assets/images/avatar-image-6.jpg'},
    {url: 'assets/images/avatar-image-7.jpg'}
  ];

  favouritePages = [
    {
      imgUrl: 'assets/images/favourite-pages/favourite-page-1.jpg',
      title: 'The Marina Bar',
      description: 'Restaurant / Bar'
    },
    {
      imgUrl: 'assets/images/favourite-pages/favourite-page-2.jpg',
      title: 'Tapronus Rock',
      description: 'Rock Band'
    },
    {
      imgUrl: 'assets/images/favourite-pages/favourite-page-3.jpg',
      title: 'Pixel Digital Design',
      description: 'Company'
    },
    {
      imgUrl: 'assets/images/favourite-pages/favourite-page-4.jpg',
      title: 'Ray Bar & Grill',
      description: 'Restaurant / Bar'
    },
    {
      imgUrl: 'assets/images/favourite-pages/favourite-page-5.jpg',
      title: 'Crimson Agency',
      description: 'Company'
    },
    {
      imgUrl: 'assets/images/favourite-pages/favourite-page-6.jpg',
      title: 'The Marina Bar',
      description: 'Restaurant / Bar'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
