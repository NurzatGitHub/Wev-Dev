import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album.model';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos'; 

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }
  getAlbum(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/albums/${id}`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.apiUrl, album);
  }

  getPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${albumId}/photos`);
  }
  
  updateAlbum(album: Album): Observable<Album> {
    const url = `${this.apiUrl}/${album.id}`;
    return this.http.put<Album>(url, album);
  }
}
