import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
//import {type newTaskData } from './task/task.model';
import { TaskService } from './tasks.service';
@Component({
     selector: 'app-tasks',
     imports: [TaskComponent, NewTaskComponent],
     templateUrl: './tasks.component.html',
     styleUrl: './tasks.component.css',
})
export class TasksComponent {
    @Input({required :true }) userid!: string ;
     @Input({required : true}) name!: string ;
     @Output() newTask = new EventEmitter<string>();
     constructor(private taskService:TaskService) {}
     isAddingTask =false;


     get selectedUserTask(){
       return this.taskService.getUserTasks(this.userid);
     }
    
     onStartAddTask(){
      this.isAddingTask =true ;
     }
     onCloseAddTask(){
          this.isAddingTask= false;
     }
     
}
