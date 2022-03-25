import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsGridSectionComponent } from './testimonials-grid-section.component';

describe('TestimonialsGridSectionComponent', () => {
  let component: TestimonialsGridSectionComponent;
  let fixture: ComponentFixture<TestimonialsGridSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsGridSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsGridSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
