import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent ,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) task!:task
@Output() complete = new EventEmitter<string>();
private taskService=inject(TaskService)


onComplete(){
  this.taskService.removeTask(this.task.id);
}
}
