import { Component ,Input,OnInit,OnChanges,SimpleChanges} from '@angular/core';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  {
   valueInput: string ='ducanh'
  constructor(){
    console.log(this.valueInput);
  }

  onKey($event:any){
    console.log($event.target.value);

  }
}
