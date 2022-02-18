import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo'
import * as Service from 'src/app/todos.service';

@Component({
  template: `
    <div class="form">
      <div class="lista">
        <ul
        *ngFor="let task of tasks">
        <li>{{task.title}} <button type="button" class="check" (click)="complete(task)">✓</button></li>
        </ul>
      </div>
      <input type="text" placeholder="Inserisci task" (input)="scriviTask($event)">
      <button type="button" (click)="aggiungi()">+</button>
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
  tasks!:Todo[];
  newTaskTitle!: string;

  constructor() {
    Service.get().then((res: Todo[]) =>{
      this.tasks =res
    })
   }


  ngOnInit(): void {}

  scriviTask(event:Event){
    const target = <HTMLInputElement>event.target;
    console.log(target.value);
    this.newTaskTitle = target.value;
  }

  aggiungi(){
    Service.aggiungiTask(this.newTaskTitle);
  }

  complete(task:Todo){
    Service.elimina(task);
    Service.aggiungi(task);
  }

}
