import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // output() makes the eventemitter listenable from outside
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;
  public currentUser: any = null;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }
  // Emit a custom event in header component
  // To which we can listen, from the app-component
  onToggleSidenav() {
    this.sidenavToggle.emit();
    // Now emitting event whenever clicking a menu btn
  }

  onLogout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
