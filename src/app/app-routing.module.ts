import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ArchivesComponent } from './pages/archives/archives.component';
import { ArchiveContentComponent } from './components/archive-content/archive-content.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { IsOwnerGuard } from './guards/is-owner.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'archives', canActivate: [AuthGuard],
    children: [
      { path: '', component: ArchivesComponent },
      { path: ':archiveId', component: ArchivesComponent }
    ]
  },
  { path: 'profile/:userId', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile/:userId/edit', component: EditProfileComponent, canActivate: [AuthGuard, IsOwnerGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

