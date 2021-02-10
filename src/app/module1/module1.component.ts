import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css'],
})
export class Module1Component implements OnInit {
  param1: number = 161;
  param2: boolean = true;
  param3: string = 'hello1';
  param4: null = null;
  param5: undefined = undefined;
  obj = { a: 1, b: 2, c: { d: 'объект внутри объекта' } };
  msg1: string = new Date().toDateString();
  msg2: string = new Date().toTimeString();

  @Input()
  inputParam6: string = '';

  @Output()
  userChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  setValue(e: any): void {
    this.param3 = e.target?.value || e.value;
    this.userChange.emit(this.param3);
  }
}
