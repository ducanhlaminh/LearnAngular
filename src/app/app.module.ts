import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProdcutItemComponent } from './components/prodcut-item/prodcut-item.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './container/home/home.component';
import { TodoListComponent } from './container/todo-list/todo-list.component';

const routes : Routes = [
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path : 'todo-list',
    component: TodoListComponent
  },
  {
    path : '',
    redirectTo:'home',
    pathMatch:'full'
  },


]

@NgModule({
  declarations: [
    AppComponent,
    ProdcutItemComponent,
    ButtonComponent,
    HomeComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
