import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import {type newTaskData } from './task/task.model';
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
     isAddingTask =false;
     tasks = [
          {
               id: 't1',
               userId: 'u1',
               title: 'Master Anguler',
               summary: 'Leanr all the besics and andvanced features of anguler & apply them .',
               dueDate: '2025-12-31',
          },
          {
               id: 't2',
               userId: 'u2',
               title: 'Explore ReactJS',
               summary: 'Understand components, hooks, and state management in React.',
               dueDate: '2025-11-15',
          },
          {
               id: 't3',
               userId: 'u3',
               title: 'Deep Dive into .NET Core',
               summary: 'Build REST APIs using .NET Core and Entity Framework.',
               dueDate: '2026-01-10',
          },
     ];

     get selectedUserTask(){
       return this.tasks.filter( t => t.userId === this.userid)
     }
     onCompleteTask(id :string){
          this.tasks = this.tasks.filter(t  => t.id !== id)
     }
     onStartAddTask(){
      this.isAddingTask =true ;
     }
     onCancelStartNewTask(){
          this.isAddingTask= false;
     }
     onAddTask(taskdata:newTaskData){

          this.tasks.unshift({
               id:'t4',
               userId : this.userid,
               title: taskdata.title,
               summary: taskdata.summary,
               dueDate:taskdata.date
          })
          this.isAddingTask = false
     }
}
