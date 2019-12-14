import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ArchiveService } from './../../services/archive.service';
import { LoadingService } from './../../services/loading.service';
// import * as firebase from 'firebase/app';

import { Archive } from './../../interfaces/archive';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-archive-content',
  templateUrl: './archive-content.component.html',
  styleUrls: ['./archive-content.component.scss']
})
export class ArchiveContentComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public archive: Archive;
  public contents: Observable<any[]>;


  constructor(
    private route: ActivatedRoute,
    private archiveService: ArchiveService,
    private loadingService: LoadingService,
    private db: AngularFirestore

  ) {
    this.subscriptions.push(
      this.archiveService.selectedArchive.subscribe(archive => {
        this.archive = archive;
        console.log('Current Archive: ', archive);
        // this.loadingService.isLoading.next(false);
      })
    );
    this.subscriptions.push(
      this.archiveService.selectedArchiveContents.subscribe(contents => {
        this.contents = contents;
        console.log('Contents: ', contents);
      })
    );
  }

  ngOnInit() {
    this.subscriptions.push(
      this.route.paramMap.subscribe(params => {
        const archiveId = params.get('archiveId');
        this.archiveService.changeSelectedArchive.next(archiveId);
      })
    );
    // const storage = firebase.app().storage('gs://lz-family-video-archive.appspot.com').ref().listAll();
    // console.log('storage', storage);
    // this.subscriptions.push(
    //   this.route.paramMap.subscribe(params => {
    //     const archiveId = params.get('archiveId');
    //     const userRef: AngularFirestoreDocument<any> = this.db.doc(`archives/${archiveId}/contents`);
    //     userRef.valueChanges().subscribe(contents => this.contents = contents);
    //   })
    // );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
