import { Alert } from './classes/alert';
import { AlertService } from './services/alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger } from '@angular/animations';
import { LoadingService } from './services/loading.service';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { ArchiveService } from './services/archive.service';
import { Archive } from './interfaces/archive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public allArchives: [] = [];
  public alerts: Array<Alert> = [];
  public loading: Boolean = false;
  public currentUser: any = null;
  public archive: Archive;
  public contents: Observable<any[]>;
  public eightMmArchive;

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private archiveService: ArchiveService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.alertService.alerts.subscribe(alert => {
        this.alerts.push(alert);
      }));
    this.subscriptions.push(
      this.loadingService.isLoading.subscribe(isLoading => {
        this.loading = isLoading;
      })
    );
    this.subscriptions.push(
      this.authService.currentUser.subscribe(user => {
        this.currentUser = user;
        // console.log('AppComponent-CurrentUser: ', this.currentUser);
      })
    );
    this.subscriptions.push(
      this.archiveService.selectedArchive.subscribe(archive => {
        this.archive = archive;
        // console.log('Current Archive: ', archive);
        // this.loadingService.isLoading.next(false);
      })
    );
    this.subscriptions.push(
      this.archiveService.selectedArchiveContents.subscribe(contents => {
        this.contents = contents;
        // console.log('Contents: ', contents);
      })
    );
    // this.subscriptions.push(
    //   this.archiveService.archives.subscribe(archives => {
    //     this.allArchives = archives;
    //   })
    //   // this.archiveService.eightmmRef.listAll().then(result => {
    //   //   result.items.forEach((res) => {
    //   //     const lol = res.getDownloadURL().then((url) => {
    //   //       console.log('res', res);
    //   //       console.log('8mm', url);
    //   //       return url;
    //   //     });
    //   //   });
    //   // });
    // );
  }

  ngOnDestroy() {
    // Unsubscribe properly to avoid memory leaks
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
