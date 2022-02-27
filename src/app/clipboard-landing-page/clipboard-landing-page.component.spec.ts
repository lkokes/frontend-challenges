import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardLandingPageComponent } from './clipboard-landing-page.component';

describe('ClipboardLandingPageComponent', () => {
  let component: ClipboardLandingPageComponent;
  let fixture: ComponentFixture<ClipboardLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipboardLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClipboardLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
