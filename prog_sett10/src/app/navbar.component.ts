import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <a routerLinkActive="active" routerLink="todo">Todos</a>
  <a routerLinkActive="active" routerLink="completed">Completati</a>
  `,
  styles: [
    `a{
      text-decoration:none;
      font-size:30px;
      color:grey;
    }
    a{
      margin: 2em;
    }`
  ]
})
export class NavbarComponent implements OnInit {

  if () {

  }
  constructor() { }

  ngOnInit(): void {
  }

}
