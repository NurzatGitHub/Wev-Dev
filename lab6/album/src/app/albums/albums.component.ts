import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album.model';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] | undefined;
  photos: Photo[] = [];
  selectedFile: File | null = null;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.loadAlbums();
    });
  }

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
