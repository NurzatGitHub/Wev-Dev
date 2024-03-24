import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { AlbumsPhotosComponent } from './albums-photos/albums-photos.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'about', component: AboutComponent, title: 'About'},
    {path: 'albums', component: AlbumsComponent, title: 'Albums'},
    {path: 'albums/:id', component: AlbumsDetailsComponent, title: 'Album detail'},
    {path: 'albums/:id/photos', component: AlbumsPhotosComponent, title: 'Album detail photos'},
    {path: '**', redirectTo: 'home'}
];  