import { Component, EventEmitter, Output,inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input ({required:true}) userId!:string 
  @Output() closee  = new EventEmitter<void>(); 
  private tasksService = inject(TaskService)
  enterdTitle='';
  enterdSummary='';
  enterdDate ='';

 onCancle(){
  this.closee.emit();
 }
 onSubmit() {
     this.tasksService.addTask(
      {
        title:this.enterdTitle,
        summary:this.enterdSummary,
        date:this.enterdDate,
      },this.userId, 
     )
     this.closee.emit();
 }
 handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ') {
    this.onCancle();
    event.preventDefault(); // Prevent scrolling on Space
  }
}
}
