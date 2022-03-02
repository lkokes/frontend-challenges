import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tip-calculator-app',
  templateUrl: './tip-calculator-app.component.html',
  styleUrls: ['./tip-calculator-app.component.css'],
})
export class TipCalculatorAppComponent implements OnInit {

  bill?: number;
  people?: number;
  tip?: number;
  custom?: number;
  amount?: string;
  total?: string;

  @ViewChild('custom') inputCustom?: any;

  constructor() { }

  ngOnInit(): void {
  }

  onBill(event: Event) {
    this.bill = +(event.target as HTMLInputElement).value
    this.calculateTipAmount(this.bill, this.people, this.tip)
    this.calculateTotal(this.bill, this.people, this.tip)
  }

  onNumberOfPeople(event: Event) {
    this.people = +(event.target as HTMLInputElement).value
    this.calculateTipAmount(this.bill, this.people, this.tip)
    this.calculateTotal(this.bill, this.people, this.tip)
  }

  onCustom(event: Event){
    this.tip = +(event.target as HTMLInputElement).value
    this.calculateTipAmount(this.bill, this.people, this.tip)
    this.calculateTotal(this.bill, this.people, this.tip)
  }

  setTipsFromButtons(tip: number) {
    this.tip = tip
    this.handleClear()
    this.calculateTipAmount(this.bill, this.people, this.tip)
    this.calculateTotal(this.bill, this.people, this.tip)
  }

  calculateTipAmount(bill?: number, people?: number, tip?: number) {
    if(bill && people && tip ){
      this.amount = "$" + (bill*(tip/100)/people).toFixed(2);
    }
  }

  calculateTotal(bill?: number, people?: number, tip?: number){
    if(bill && people && tip ){
      this.total = "$" + ((bill + (bill*(tip/100)))/people).toFixed(2);
    }
  }

  resetCalculator(){
    this.bill = 0;
    this.people = 0;
    this.tip = 0;
    this.custom = 0;
    this.inputCustom.nativeElement.value = 0;
    this.amount = "$0.00";
    this.total = "$0.00";
  }

  handleClear(){
    this.inputCustom.nativeElement.value = 0;
}
}
