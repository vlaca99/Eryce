import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePanelsComponent } from './profile-panels.component';

describe('ProfilePanelsComponent', () => {
  let component: ProfilePanelsComponent;
  let fixture: ComponentFixture<ProfilePanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
