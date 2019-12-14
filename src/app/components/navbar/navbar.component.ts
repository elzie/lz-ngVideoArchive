import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  @Output() closeSidenav = new EventEmitter<void>();

  public currentUser: any = null;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
    // Now emitting event whenever clicking a menu btn
  }
  onClose() {
    this.closeSidenav.emit();
  }
}
