import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTrackingDashboardComponent } from './time-tracking-dashboard.component';

describe('TimeTrackingDashboardComponent', () => {
  let component: TimeTrackingDashboardComponent;
  let fixture: ComponentFixture<TimeTrackingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeTrackingDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTrackingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
