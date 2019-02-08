import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSidebarLeftComponent } from './profile-sidebar-left.component';

describe('ProfileSidebarLeftComponent', () => {
  let component: ProfileSidebarLeftComponent;
  let fixture: ComponentFixture<ProfileSidebarLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSidebarLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSidebarLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
