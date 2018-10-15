import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class infoArtis {

  constructor(private http: HttpClient) { }
  getData() {
  
    return this.http.get('https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=Rihanna&api_key=a0041104ef7bbd3e6d2f0f0fa7d2b503&format=json')
    .pipe(map(data => data['artist'].name))
  }
}

