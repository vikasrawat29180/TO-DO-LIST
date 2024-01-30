import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { todo, todoArray } from 'src/app/list';
@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent {
  id!: number
  itodo: todo

  constructor(private route: ActivatedRoute) {
    if (todoArray.length == 0) {
      let localItem = localStorage.getItem("todo");
      if (localItem != null) {
        const todoList = JSON.parse(localItem);
        todoArray.splice(0, todoArray.length)
        todoList.forEach((todo: todo) => { todoArray.push(todo) })
      }
    }
    route.params.subscribe((params) => {
      this.id = params["id"] - 1;
    });
    this.itodo = todoArray[this.id]
  }

}
