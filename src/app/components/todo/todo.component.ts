import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todo } from 'src/app/list';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: todo;
  @Input() i!: number;
  @Output() deleteTodo = new EventEmitter<todo>();
  @Output() toggleActive = new EventEmitter<todo>();

  deleteIt() {
    this.deleteTodo.emit(this.todo);
    console.log('done')
  }
  toggle() {
    this.toggleActive.emit(this.todo);
    console.log('done')
  }

}
