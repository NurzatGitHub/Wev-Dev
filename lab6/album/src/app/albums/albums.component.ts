import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumsService: AlbumsService, private router: Router) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe(
      (albums: Album[]) => {
        this.albums = albums;
      },
      (error: any) => {
        console.error('Error loading albums:', error);
      }
    );
  }

  viewAlbumDetails(albumId: number): void {
    this.router.navigate(['/albums', albumId]);
  }
}
