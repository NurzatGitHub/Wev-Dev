import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album.model';
import { Router } from '@angular/router';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  albums: Album[] = [];
  photos: Photo[] = [];
  selectedFile: File | null = null;

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

  // deleteAlbum(id: number): void {
  //   this.albumsService.deleteAlbum(id).subscribe(
  //     () => {
  //       this.loadAlbums(); 
  //     },
  //     (error: any) => {
  //       console.error('Error deleting album:', error);
  //     }
  //   );
  // }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(event: any): void {
    event.preventDefault();
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        const newPhoto: Photo = { 
          albumId: 1,
          id: this.photos.length + 1, 
          title: 'New Photo',
          url: reader.result as string, 
          thumbnailUrl: reader.result as string 
        };
        this.photos.push(newPhoto);
      };
      this.selectedFile = null;
    }
  }
}
