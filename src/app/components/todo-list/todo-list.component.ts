import { Component } from '@angular/core';
import { todo, todoArray } from 'src/app/list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoList: todo[];
  search: string = '';

  constructor() {
    let localItem = localStorage.getItem("todo");
    if (localItem == null) {
      this.todoList = [];
    }
    else {
      this.todoList = JSON.parse(localItem);
      todoArray.splice(0, todoArray.length)
      this.todoList.forEach((todo) => {
        todoArray.push(todo);
        todo.display = true
      })
    }
    console.log(this.todoList)
  }

  deleteTodo(todo: todo) {
    let index = todoArray.indexOf(todo);
    todoArray.splice(index, 1);
    this.todoList = todoArray;
    localStorage.setItem('todo', JSON.stringify(todoArray))
  }
  toggle(todo: todo) {
    let index = todoArray.indexOf(todo);
    todoArray[index].active = !todoArray[index].active;
    this.todoList = todoArray;
    localStorage.setItem('todo', JSON.stringify(todoArray))
  }

  startSearch() {
    if (this.search.length === 0) {
      this.todoList.forEach(todo => todo.display = true);
    }
    else {
      const wordArray = this.search.toLowerCase().split(' ');
      wordArray.forEach((word) => {
        this.todoList.forEach((todo) => {
          if (!todo.title.split(' ').includes(word)) {
            todo.display = false;
          } else {
            todo.display = true;
          }
        })
      })
    }
  }
}
