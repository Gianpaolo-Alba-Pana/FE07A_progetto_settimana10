import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoPage } from './pages/todo.page';
import { CompletedPage} from './pages/completed.page';
import { NavbarComponent } from './navbar.component';

const routes: Route[] = [
  {
    path:'todo',
    component:TodoPage
  },
  {
    path:'completed',
    component:CompletedPage
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoPage,
    CompletedPage,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
