import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Album, AlbumPhoto } from "./models";

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {
    
    constructor(private client: HttpClient) {
    }

    getAlbums(): Observable<Album[]> {
        return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
    }

    getAlbum(id: number): Observable<Album> {
        return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
    }

    createAlbum(newAlbum: Album): Observable<Album>{
        return this.client.post<Album>(`https://jsonplaceholder.typicode.com/albums`, newAlbum);
    } 

    deleteAlbum(id: number) {
        return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
    }

    updateAlbum(id: number, newTitle: string) {
        const payload = {title: newTitle};
        console.log(payload);
        return this.client.patch<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`, payload);
    }

    getAlbumPhotos(id: number) {
        return this.client.get<AlbumPhoto[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
    }
}