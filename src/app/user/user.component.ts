import {
     Component,
     EventEmitter,
     Input,
     Output,
} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
     selector: 'app-user',
     imports: [CardComponent],
     templateUrl: './user.component.html',
     styleUrl: './user.component.css',
})
export class UserComponent {
     @Input({ required: true }) user!: User;
     @Input({ required: true }) selected!: boolean;
     @Output() Select = new EventEmitter<string>();
 

     get imagePath() {
          return 'assets/users/' + this.user.avatar;
     }

     onSelectUser() {
          this.Select.emit(this.user.id);
     }
}
