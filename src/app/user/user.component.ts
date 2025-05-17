import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const  radnomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  seledctedUser = DUMMY_USERS[radnomIndex]

  get  imagePath (){
    return 'assets/users/'+ this.seledctedUser.avatar
  }

  onSelectUser( ){
    const  radnomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

    this.seledctedUser = DUMMY_USERS[radnomIndex]
  }
}
