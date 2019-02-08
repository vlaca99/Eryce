import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFixedSidebarComponent } from './profile-fixed-sidebar.component';

describe('ProfileFixedSidebarComponent', () => {
  let component: ProfileFixedSidebarComponent;
  let fixture: ComponentFixture<ProfileFixedSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFixedSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFixedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
