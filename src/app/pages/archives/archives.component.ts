import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.db.collection('archives').valueChanges().subscribe(res => {
    //   console.log(res);
    //   // valueChanges Logs out values only - no metadata
    // });
  }

}
