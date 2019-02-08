import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSidebarRightComponent } from './profile-sidebar-right.component';

describe('ProfileSidebarRightComponent', () => {
  let component: ProfileSidebarRightComponent;
  let fixture: ComponentFixture<ProfileSidebarRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSidebarRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSidebarRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
