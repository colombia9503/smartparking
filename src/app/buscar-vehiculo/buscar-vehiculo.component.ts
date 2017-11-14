import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AutoService } from '../services/auto.service';
import { Auto } from '../classes/auto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.component.html',
  styleUrls: ['./buscar-vehiculo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuscarVehiculoComponent implements OnInit {
  autosList: Observable<Auto[]>;

  constructor(private autoService: AutoService) {
      this.autosList = autoService.getAutosList();
  }

  ngOnInit() {
  }

  getSaldoAcumulado(fentrada) {
    let fsalida: string = new Date().toString();
    let diffInMs: number = Date.parse(fsalida) - Date.parse(fentrada);
    return (diffInMs / 1000 / 60 / 60) * 2000;
  }
}
