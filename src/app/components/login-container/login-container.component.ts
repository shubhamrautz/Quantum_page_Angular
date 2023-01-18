import { Component, Input } from '@angular/core';
import { statesList } from './login-states';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent {
  constructor(private router: Router) {}

  @Input() link: any;
  states = statesList.states;
  districts: string[] = statesList.states[0].districts;

  selected: string = '';

  onSelected(value: any) {
    this.selected = value;
    for (let i = 0; i < statesList.states.length; i++) {
      if (statesList.states[i].state == this.selected)
        this.districts = statesList.states[i].districts;
    }
  }

  login() {
    this.router.navigate([this.link]);
  }
}
