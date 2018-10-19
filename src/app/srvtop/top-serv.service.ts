import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TopServService {

  constructor(private http: HttpClient) { }
  getTop(name_Artista: string) {
    return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name_Artista}&api_key=a0041104ef7bbd3e6d2f0f0fa7d2b503&format=json`)
  .pipe(map(data => data['toptracks'].track))
  }
  
}
