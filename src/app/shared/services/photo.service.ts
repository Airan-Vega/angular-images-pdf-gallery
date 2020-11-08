import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PhotoI } from '../models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private url: string = 'http://localhost:4000/api/photos';

  constructor(private http: HttpClient) {}

  public createPhoto(title: string, description: string, photo: File): any {
    //We created a form with the javascript form data object
    const fd = new FormData();
    //It add the fields to the form and their values
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    //It send the form to the api
    return this.http.post(this.url, fd);
  }

  public getPhotos(): Observable<PhotoI[]> {
    return this.http.get<PhotoI[]>(this.url);
  }

  public getPhoto(id: string): Observable<PhotoI> {
    return this.http.get<PhotoI>(`${this.url}/${id}`);
  }

  public deletePhoto(id: string): Observable<PhotoI> {
    return this.http.delete<PhotoI>(`${this.url}/${id}`);
  }

  public updatePhoto(id: string, title: string, description: string): any {
    return this.http.patch(`${this.url}/${id}`, { title, description });
  }
}
