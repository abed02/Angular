import { Injectable } from '@angular/core';
import { type newTaskData } from './task/task.model';
@Injectable({ providedIn: 'root' })
export class TaskService {
     private tasks = [
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

     constructor() {
          const tasks = localStorage.getItem('tasks');
          if (tasks) {
               this.tasks = JSON.parse(tasks);
          }
     }

     getUserTasks(userId: string) {
          return this.tasks.filter((t) => t.userId === userId);
     }

     addTask(taskdata: newTaskData, userId: string) {
          this.tasks.unshift({
               id: new Date().getTime.toString(),
               userId: userId,
               title: taskdata.title,
               summary: taskdata.summary,
               dueDate: taskdata.date,
          });
          this.saveTasks();
     }
     removeTask(id: string) {
          this.tasks = this.tasks.filter((t) => t.id !== id);
          this.saveTasks();
     }
     private saveTasks() {
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
     }
}
