import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

// import to register all componet wnat to use inside the  app Component
@Component({
     selector: 'app-root',
     imports: [HeaderComponent, UserComponent, TasksComponent],
     templateUrl: './app.component.html',
     styleUrl: './app.component.css',
})
export class AppComponent {
     users = DUMMY_USERS;
     selectedUserID = 'u1';

     get selectUser() {
          return this.users.find((user) => user.id === this.selectedUserID);
     }

     onSelectUser(id: string) {
          this.selectedUserID = id;
     }
     title = 'app';
}
