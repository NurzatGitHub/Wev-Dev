import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumPhoto } from '../models';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums-photos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './albums-photos.component.html',
  styleUrl: './albums-photos.component.css'
})
export class AlbumsPhotosComponent {
  albumPhotos!: AlbumPhoto[];
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService
    ){
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')) {
        const albumId = Number(params.get('id'));
        this.loaded = false;
        console.log(albumId);
        this.albumService.getAlbumPhotos(albumId).subscribe( (albumPhotos) => {
          this.albumPhotos = albumPhotos;
          this.loaded = true;
          console.log(albumPhotos[0].title)
        }
        )
      }
    })
  }

}