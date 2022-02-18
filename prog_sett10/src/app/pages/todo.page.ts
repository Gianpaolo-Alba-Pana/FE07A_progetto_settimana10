import { Component, OnInit } from '@angular/core';


@Component({
  template: `
    <div class="form">
      <div class="lista">
        <ul
        *ngFor="let item of list">
        <li>{{item.name}} <button type="button" class="check" (click)="complete(task.value)">✓</button></li>
        </ul>
      </div>
      <input type="text" placeholder="Inserisci task" #task>
      <button type="button" (click)="addTask(task.value)" >+</button>
    </div>
  `,
  styles: [
    `
    .check{
      border:1px solid black;
      background-color:transparent;
      font-size:10px;
      color:black;
    }
    .check:hover{
      background-color:green;
    }
    li{
      list-style-type:none;
    }
    .lista{
    }
    .form{
      position:static;
      margin-top:50vh;
    }
    `
  ]
})
export class TodoPage implements OnInit {
  list:any[]=[];

  constructor() {
   }

  addTask(item:string){
    this.list.push({id:this.list.length, name:item});
  }

  complete(item:string){

  }


  ngOnInit(): void {}

}
