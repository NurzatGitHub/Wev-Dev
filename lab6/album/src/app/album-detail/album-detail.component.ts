import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../album.model';
import { Photo } from '../photo.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  albumId!: number;
  album: Album | undefined;
  photos: Photo[] = [];

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAlbum();
    this.loadPhotos();
  }

  loadAlbum(): void {
    this.albumsService.getAlbum(this.albumId).subscribe(album => {
      this.album = album;
    });
  }

  loadPhotos(): void {
    this.albumsService.getPhotos(this.albumId).subscribe(photos => {
      this.photos = photos;
    });
  }
}
