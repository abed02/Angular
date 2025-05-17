// in order to convert this to component  must import the component decorator from core packages  
import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrl:'./header.component.css'
 })
export class HeaderComponent {}