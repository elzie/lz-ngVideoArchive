import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  public currentUser: any = null;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    // this.authService.currentUser.subscribe(user => {
    //   this.currentUser = user;
    // });
    /**
     * PROBLEM: This component cannot
     * make a subscription to 'authService.currentUser' - because it
     * crashes the loading of data, when I go to 'Profile' and back
     * to 'Archives', most like something with Angular Material - or
     * resubscribing... Help!
     */
  }

  onClose() {
    this.closeSidenav.emit();
  }
  onLogout() {
    this.onClose();
    this.authService.logout();
  }
}
