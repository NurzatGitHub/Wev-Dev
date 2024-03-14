import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums'; // Пример URL для тестового API

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  getAlbum(id: number): Observable<Album> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Album>(url);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(this.apiUrl, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    const url = `${this.apiUrl}/${album.id}`;
    return this.http.put<Album>(url, album);
  }

  deleteAlbum(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
