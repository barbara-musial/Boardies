import {Component, Input} from '@angular/core';

@Component({
  selector: 'nav-bar-button',
  templateUrl: './nav-bar-button.component.html',
  styleUrls: ['./nav-bar-button.component.scss']
})
export class NavBarButtonComponent {
  @Input()
  icon:string ="";
}
