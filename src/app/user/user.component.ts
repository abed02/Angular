import {
     Component,
     EventEmitter,
     Input,
     Output,
} from '@angular/core';

// type User = {
//      id: string;
//      avatar: string;
//      name: string;
// };
interface User {
     id: string;
     avatar: string;
     name: string;
}
@Component({
     selector: 'app-user',
     imports: [],
     templateUrl: './user.component.html',
     styleUrl: './user.component.css',
})
export class UserComponent {
     @Input({ required: true }) user!: User;
     // @Input ({required:true}) id!:string;
     // @Input({required :true}) avatar!:string ;
     // @Input({required :true}) name!:string;
     @Output() select = new EventEmitter<string>();
     //select = output<string>() // not signal   used if you want to not used decorator

     get imagePath() {
          return 'assets/users/' + this.user.avatar;
     }

     onSelectUser() {
          this.select.emit(this.user.id);
     }
}
