import { Component } from '@angular/core';
import { todoArray } from 'src/app/list';
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: String = ""
  desc: String = ""

  constructor(private router: Router) {

  }
  addTodo() {
    if (this.title.length != 0 && this.desc.length != 0) {
      todoArray.push({ title: this.title.toLowerCase(), desc: this.desc.toLowerCase(), active: true, display: true });
      localStorage.setItem('todo', JSON.stringify(todoArray))
      this.router.navigate(['/'])
    }
    else {
      alert('Fill all fields!!')
    }
  }
}
