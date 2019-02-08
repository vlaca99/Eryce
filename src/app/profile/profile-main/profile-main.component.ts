import { Component, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss']
})
export class ProfileMainComponent implements OnDestroy {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'profile-page');
   }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'profile-page');
  }

}
