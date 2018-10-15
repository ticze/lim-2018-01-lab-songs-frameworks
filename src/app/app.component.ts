import { Component } from '@angular/core';
import { infoArtis } from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lab song';
  nombre = '';
  constructor(private apiService: infoArtis) {
    this.apiService.getData()
    .subscribe(data=>{
      this.nombre = data;
      console.log(data)
    })
  }
}

