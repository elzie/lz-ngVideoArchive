import { Component, OnInit, Output, EventEmitter, Optional } from '@angular/core';
import { ArchiveService } from './../../services/archive.service';
import { AppComponent } from './../../app.component';
@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.scss']
})
export class ArchiveListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(
    public archiveService: ArchiveService,
    @Optional() public parent: AppComponent
  ) { }
  /**
   * make that fkn import of the Archives here - and then make a store with data.
   */
  ngOnInit() {
    console.log(this.parent);
  }
  onClose() {
    this.closeSidenav.emit();
  }
}
