import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveContentComponent } from './archive-content.component';

describe('ArchiveContentComponent', () => {
  let component: ArchiveContentComponent;
  let fixture: ComponentFixture<ArchiveContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
