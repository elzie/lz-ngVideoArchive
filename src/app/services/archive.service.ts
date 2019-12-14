import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, of } from 'rxjs';
import { LoadingService } from './loading.service';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  public archives: Observable<any>;
  public changeSelectedArchive: BehaviorSubject<string> | null = new BehaviorSubject(null);
  public selectedArchive: Observable<any>;
  public selectedArchiveContents: Observable<any>;

  constructor(
    private db: AngularFirestore,
  ) {
    this.selectedArchive = this.changeSelectedArchive.switchMap(archiveId => {
      if (archiveId) {
        return db.doc(`archive-blom/${archiveId}`).valueChanges();
      }
      return of(null);
    });
    this.selectedArchiveContents = this.changeSelectedArchive.switchMap(archiveId => {
      if (archiveId) {
        return db.collection(`archive-blom/${archiveId}/contents`).valueChanges();
      }
      return of(null);
    });

    this.archives = db.collection('archive-blom').valueChanges();
  }

  createNewArchive() {
    console.log('create new archive');
  }
}
