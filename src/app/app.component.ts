import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Bootstrapped Angular app works!!! Yeahh !';

  constructor(private location: Location) {
  }

  isActiveRoute(route: string) {
    return location.pathname.indexOf(route) > -1;
  }
}
