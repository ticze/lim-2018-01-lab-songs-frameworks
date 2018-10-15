import { Component } from '@angular/core';
import { infoArtis } from './services/info.service';

export interface Artista {
  nombre: string,
  imagen: string,
  listeners: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //Esto captura el valor del imput 
  buscar_artist: string;
  artista: Artista = {
    nombre: '',
    imagen: '',
    listeners: ''
  }
  title = 'lab song';


  constructor(private apiService: infoArtis) { }

  getArtista() {
    this.apiService.getData(this.buscar_artist)
      .subscribe((data: any) => {
        this.artista.nombre = data['artist'].name;
        this.artista.imagen = data['artist'].image[2]["#text"];
        this.artista.listeners = data['artist'].stats.listeners;
      })
  }
}


