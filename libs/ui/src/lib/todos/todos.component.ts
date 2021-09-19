import { Component, Input } from '@angular/core';
import { Todo } from '@moij/data';

@Component({
  selector: 'moij-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos!: Todo[];
}
