import { Component, EventEmitter, Output, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() Cancel  = new EventEmitter<void>(); 
  @Output() add = new EventEmitter<newTaskData>();
  enterdTitle='';
  enterdSummary='';
  enterdDate ='';

 onCancle(){
  this.Cancel.emit();
 }
 onSubmit() {
     this.add.emit(
      {
        title:this.enterdTitle,
        summary:this.enterdSummary,
        date:this.enterdDate,
      }
     )
 }
 handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ') {
    this.onCancle();
    event.preventDefault(); // Prevent scrolling on Space
  }
}
}
