import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { TodoListItem } from './models';
import { TodosDataService } from './todos-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

  todos$: Observable<TodoListItem[]>;

  constructor(private service: TodosDataService) {
    service.getAll();
  }

  ngOnInit(): void {
    this.todos$ = this.service.getAll();
  }

  markComplete(item: TodoListItem) {

  }

  add(what: string) {
    const description = what;

  }

  clearCompleted() {

  }
}
