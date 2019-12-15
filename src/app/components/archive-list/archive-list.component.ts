import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArchiveService } from './../../services/archive.service';
@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.scss']
})
export class ArchiveListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(public archiveService: ArchiveService) { }
  /**
   * make that fkn import of the Archives here - and then make a store with data.
   */
  ngOnInit() {
  }
  onClose() {
    this.closeSidenav.emit();
  }
}
