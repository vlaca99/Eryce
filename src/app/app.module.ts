import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';
import { LoginHeaderComponent } from './login/login-header/login-header.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileMainComponent } from './profile/profile-main/profile-main.component';
import { ProfileHeaderComponent } from './profile/profile-header/profile-header.component';
import { ProfileNavComponent } from './profile/profile-nav/profile-nav.component';
import { ProfileFixedSidebarComponent } from './profile/profile-fixed-sidebar/profile-fixed-sidebar.component';
import { ProfileSidebarLeftComponent } from './profile/profile-sidebar-left/profile-sidebar-left.component';
import { ProfileSidebarRightComponent } from './profile/profile-sidebar-right/profile-sidebar-right.component';
import { ProfilePanelsComponent } from './profile/profile-panels/profile-panels.component';
import { PanelComponent } from './profile/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    LoginHeaderComponent,
    LoginFormComponent,
    ProfileMainComponent,
    ProfileHeaderComponent,
    ProfileNavComponent,
    ProfileFixedSidebarComponent,
    ProfileSidebarLeftComponent,
    ProfileSidebarRightComponent,
    ProfilePanelsComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
