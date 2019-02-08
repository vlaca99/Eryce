import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-panels',
  templateUrl: './profile-panels.component.html',
  styleUrls: ['./profile-panels.component.scss']
})
export class ProfilePanelsComponent implements OnInit {

  @Output() userName: string;
  @Output() time: string;
  @Output() message: string;
  @Output() video: object;
  @Output() imagePost: object;
  @Output() reply: [];

  posts = [
    {
      userName: 'James Spiegel',
      time: '19 hours ago',
      // tslint:disable-next-line:max-line-length
      message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.'
    },
    {
      userName: 'James Spiegel',
      time: '19 hours ago',
      message: 'If someone missed it, check out the new song by System of a Revenge! I thinks they are going back to their roots...',
      video: {
        thumbnailUrl: 'assets/images/video-thumbnail.jpg',
        videoTitle: 'System of a Revenge - Nothing Else Matters (LIVE)',
        videoDescription: 'Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempo incididunt ut labore..',
        linkText: 'Youtube.com'
      }
    },
    {
      userName: 'James Spiegel',
      time: '19 hours ago',
      // tslint:disable-next-line:max-line-length
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.',
      replyItems: [
        {
          avatarUrl: 'assets/images/avatar-image-5.jpg',
          name: 'Elaine Drayfuss',
          time: '5 mins ago',
          replyText: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.'
        },
        {
          avatarUrl: 'assets/images/avatar-image-3.jpg',
          name: 'Green Goo Rock',
          time: '1 hour ago',
          // tslint:disable-next-line:max-line-length
          replyText: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiten, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi en lod nesciunt.',
          childReply: [
            {
              avatarUrl: 'assets/images/avatar-image-2.jpg',
              name: 'Diana Jameson',
              time: '16 hours ago',
              replyText: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            },
            {
              avatarUrl: 'assets/images/avatar-image-5.jpg',
              name: 'Nicholas Grisom',
              time: '24 mins ago',
              replyText: 'Excepteur sint occaecat cupidatat non proident.'
            },
          ]
        },
        {
          avatarUrl: 'assets/images/avatar-image-6.jpg',
          name: 'Chris Greyson',
          time: '1 hour ago',
          // tslint:disable-next-line:max-line-length
          replyText: 'Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
        }
      ]
    },
    {
      userName: 'James Spiegel',
      time: '19 hours ago',
      // tslint:disable-next-line:max-line-length
      message: 'Hi! Everyone should check out these amazing photographs that my friend shot the past week. Here’s one of them...leave a kind comment!',
      imagePost: {imageUrl: 'assets/images/img-post-1.jpg'},
      comment: {
        avatarUrl: 'assets/images/avatar-image-2.jpg',
        userName: 'Diana Jameson',
        time: '16 hours ago',
        // tslint:disable-next-line:max-line-length
        commentText: 'Here’s the first photo of our incredible photoshoot from yesterday. If you like it please say so and tell me what you wanna see next!'
      }
    },
  ];

  constructor() {}

  ngOnInit() {
  }

}
