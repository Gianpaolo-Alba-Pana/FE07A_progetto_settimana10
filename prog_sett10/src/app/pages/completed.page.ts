import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <div>
      <ul *ngFor="let item of Clist">
        <li>{{}</li>
      </ul>
    </div>
  `,
  styles: [
    `div{
      width:100px;
      height: 100px;
      margin-left:50%;
    }
    li{
      text-align: center;
    }`
  ]
})
export class CompletedPage implements OnInit {
  Clist: any[]= [];

  constructor() {}

  ngOnInit(): void {}

}
