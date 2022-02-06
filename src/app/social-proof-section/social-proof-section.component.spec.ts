import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProofSectionComponent } from './social-proof-section.component';

describe('SocialProofSectionComponent', () => {
  let component: SocialProofSectionComponent;
  let fixture: ComponentFixture<SocialProofSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialProofSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProofSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
