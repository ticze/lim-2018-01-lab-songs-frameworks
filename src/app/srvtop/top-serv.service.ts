import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopServService {

  constructor(private http: HttpClient) { }
  getTop() {
    return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=maluma&api_key=a0041104ef7bbd3e6d2f0f0fa7d2b503&format=json`)
  }
  
}
