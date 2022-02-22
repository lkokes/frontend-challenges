import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuddleLandingPageComponent } from './huddle-landing-page.component';

describe('HuddleLandingPageComponent', () => {
  let component: HuddleLandingPageComponent;
  let fixture: ComponentFixture<HuddleLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuddleLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuddleLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
