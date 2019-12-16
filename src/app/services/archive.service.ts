import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject, of } from 'rxjs';
import { LoadingService } from './loading.service';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  public archives: Observable<any>;
  public changeSelectedArchive: BehaviorSubject<string> | null = new BehaviorSubject(null);
  public selectedArchive: Observable<any>;
  public selectedArchiveContents: Observable<any>;

  private storage = firebase.storage();
  private storageRef = this.storage.ref();
  public eightmmRef = this.storageRef.child('archive-blom/8mm_baand');

  constructor(
    private db: AngularFirestore,
  ) {
    this.selectedArchive = this.changeSelectedArchive.switchMap(archiveId => {
      if (archiveId) {
        return this.db.doc(`archive-blom/${archiveId}`).valueChanges();
      }
      return of(null);
    });
    this.selectedArchiveContents = this.changeSelectedArchive.switchMap(archiveId => {
      if (archiveId) {
        return this.db.collection(`archive-blom/${archiveId}/contents`, ref => {
          return ref.orderBy('videoYear', 'desc').limit(50);
        }).valueChanges()
          .map(arr => arr.reverse());
      }
      return of(null);
    });

    this.archives = db.collection('archive-blom').valueChanges();
  }
  getArchiveContents(archive) {
    const archivesRef = this.storageRef.child(`archive-blom/${archive}`);
    // const archivesUpd = this.db.collection(`archive-blom/${archive}/contents`);
    // ::: Add one video-entry
    // const newVid = {
    //   videoUrl: 'url',
    //   videoTitle: 'res.name',
    //   videoDescription: 'Beskrivelse.',
    //   videoYear: '0000',
    // };
    // archivesUpd.add(newVid);

    archivesRef.listAll().then(result => {
      result.items.forEach((res) => {

        const lol = res.getDownloadURL().then((url) => {
          // let newVid = {
          //   videoUrl: url,
          //   videoTitle: res.name,
          //   videoDescription: 'Beskrivelse.',
          //   videoYear: '0000',
          // };
          // archivesUpd.add(newVid);
          console.log(res.name);
          console.log(url);
          // return url;
        });
      });
    });
  }
  createNewArchive() {
    console.log('create new archive');
  }
}
