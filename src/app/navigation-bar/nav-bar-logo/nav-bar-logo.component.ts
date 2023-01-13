import {Component, Input} from '@angular/core';

@Component({
  selector: 'nav-bar-logo',
  templateUrl: './nav-bar-logo.component.html',
  styleUrls: ['./nav-bar-logo.component.scss']
})
export class NavBarLogoComponent {
  @Input()
  icon:string = ''
}
