import { Component, OnInit, Input } from "@angular/core";
import { TopServService } from "../../srvtop/top-serv.service";

@Component({
  selector: "app-toptracks",
  templateUrl: "./toptracks.component.html",
  styleUrls: ["./toptracks.component.css"]
})
export class ToptracksComponent implements OnInit {
  canciones: any[];
  like = 0;

  @Input()
  cantante: string;

  constructor(private apiSer: TopServService) {}

  ngOnInit() {}

  getTopTrack() {
    this.apiSer.getTop(this.cantante).subscribe((data: any) => {
      this.canciones = data;
      this.like = data.listeners;
    });
  }

  likeContador(indice) {
    let contador = 0;
    const index = this.canciones.indexOf(indice);
    contador = this.canciones[index]["listeners"]++;
  }

  dislikeContador(indice) {
    let contador = 0;
    const index = this.canciones.indexOf(indice);
    contador = this.canciones[index]["listeners"]--;
  }
}
