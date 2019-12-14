// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// External Modules
import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { MaterialModule } from './material.module';

import { NgxLoadingModule } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Services
import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { LoadingService } from './services/loading.service';
// import { ChatroomService } from './services/chatroom.service';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ArchivesComponent } from './pages/archives/archives.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
// import { ChatInputComponent } from './components/chat-input/chat-input.component';
// import { ChatroomListComponent } from './components/chatroom-list/chatroom-list.component';
// import { ChatroomTitleBarComponent } from './components/chatroom-title-bar/chatroom-title-bar.component';
// import { ChatMessageComponent } from './components/chat-message/chat-message.component';
// import { ChatroomWindowComponent } from './components/chatroom-window/chatroom-window.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { environment } from 'src/environments/environment';
import { ArchiveListComponent } from './components/archive-list/archive-list.component';
import { ArchiveContentComponent } from './components/archive-content/archive-content.component';
import { ArchiveService } from './services/archive.service';

// VideOgular
import { VgCoreModule } from 'videogular2/compiled/core';
import { VgControlsModule } from 'videogular2/compiled/controls';
import { VgOverlayPlayModule } from 'videogular2/compiled/overlay-play';
import { VgBufferingModule } from 'videogular2/compiled/buffering';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ArchivesComponent,
    NavbarComponent,
    ProfileComponent,
    EditProfileComponent,
    ArchiveListComponent,
    ArchiveContentComponent,
    HeaderComponent,
    SidenavListComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NgxLoadingModule,
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MaterialModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [
    AlertService,
    LoadingService,
    AuthService,
    AuthGuard,
    DatePipe,
    ArchiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
