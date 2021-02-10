import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.css']
})
export class New1Component implements OnInit {
  par: number = 161000;

  constructor() { }

  ngOnInit(): void {
  }

}
