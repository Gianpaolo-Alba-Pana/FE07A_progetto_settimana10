import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import * as Service from 'src/app/todos.service';

@Component({
  template: `
    <div>
      <ul *ngFor="let completed of completedes">
        <li>{{completed.title}}</li>
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
  completedes!: Todo[];

  constructor() {
    Service.complete().then((res: Todo[]) => {
      this.completedes = res;
    });
   }

  ngOnInit(): void {
  }

}
