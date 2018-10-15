import { Component } from '@angular/core';
import { TopServService } from '../srvtop/top-serv.service'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
})
export class topComponent {

  constructor(private _apiService: TopServService) { 
    this._apiService.getTop()
    .subscribe(data => console.log(data))
   }
   
}

