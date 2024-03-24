import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';

@Component({
  selector: 'app-albums-details',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './albums-details.component.html',
  styleUrl: './albums-details.component.css'
})
export class AlbumsDetailsComponent {
  album!: Album;
  loaded: boolean = false;
  inputTitle: string = "";

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')) {
        const albumId = Number(params.get('id'));
        this.loaded = false;
        this.albumService.getAlbum(albumId).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        })
      }
    })
  }

  changeTitle() {
    this.albumService.updateAlbum(this.album.id, this.inputTitle).subscribe((album) =>
      this.album.title = album.title
    );
    this.inputTitle = "";
  }
}