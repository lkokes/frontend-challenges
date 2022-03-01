import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipCalculatorAppComponent } from './tip-calculator-app.component';

describe('TipCalculatorAppComponent', () => {
  let component: TipCalculatorAppComponent;
  let fixture: ComponentFixture<TipCalculatorAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipCalculatorAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipCalculatorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
