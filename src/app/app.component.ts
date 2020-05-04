import {Component} from '@angular/core';

import {AuthService} from './user/auth.service';
import {Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {slideInAnimation} from './app.animation';
import {MessageService} from './messages/message.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  get isDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {
    this.router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(event: Event) {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
      this.loading = false;
    }
  }

  loadMessages(): void {
    this.router.navigate([{outlets: {popup: ['messages']}}]);
    this.messageService.isDisplayed = true;
  }

  hideMessages(): void {
    this.router.navigate([{outlets: {popup: null}}]);
    this.messageService.isDisplayed = false;
  }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
    this.router.navigateByUrl('/welcome');
  }
}
