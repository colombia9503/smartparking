import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CeldaService } from '../services/celda.service';
import { VariableService } from '../services/variable.service';
import { AutoService } from '../services/auto.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { FirebaseListObservable } from 'angularfire2/database-deprecated';

import { Celda } from '../classes/celda';
import { Variable } from '../classes/variable';
import { Auto } from '../classes/auto';

import { Observable } from 'rxjs';

@Component({
  selector: 'control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ControlPanelComponent implements OnInit {
  auto: Auto = new Auto();
  autoModif: Auto = new Auto();
  autosList: FirebaseListObservable<Auto[]>;
  celdas: Observable<Celda>[] = [];
  temperatura: Observable<Variable>;
  iluminacion: Observable<Variable>;
  permentrada: Observable<Variable>;
  permsalida: Observable<Variable>;

  autoIngresado = false;
  autoRetirado = false;

  pagoRealizado: number = 0;

  constructor(private celdaService: CeldaService, private variableService: VariableService, private autoService: AutoService, private modalService: NgbModal) {
    this.autosList = autoService.getAutosList();
    this.celdas.push(celdaService.getCelda('p1'));
    this.celdas.push(celdaService.getCelda('p2'));
    this.celdas.push(celdaService.getCelda('p3'));
    this.celdas.push(celdaService.getCelda('p4'));
    this.celdas.push(celdaService.getCelda('p5'));
    this.celdas.push(celdaService.getCelda('p6'));
    this.celdas.push(celdaService.getCelda('entrada'));
    this.celdas.push(celdaService.getCelda('salida'));
    this.temperatura = variableService.getVariable('temperatura');
    this.iluminacion = variableService.getVariable('iluminacion');
    this.permentrada = variableService.getVariable('permentrada');
    this.permsalida = variableService.getVariable('permsalida');
  }
  
  ngOnInit() {

  }

  newSalida() {
    this.autoRetirado = false;
    this.autoModif = new Auto();
    this.pagoRealizado = 0;
  }

  newIngreso(): void {
    this.autoIngresado = false;
    this.auto = new Auto();
  }

  openModal(content) {
    this.modalService.open(content);
  }

  saveAuto() {
    this.auto.fentrada = new Date().toString();
    this.auto.parqueado = true;
    this.autoService.createAuto(this.auto);
    this.variableService.updateVariable('permentrada', {valor: 1});
    this.auto = new Auto();
  }

  updateAuto(placa: string) {
    let dataResult;
    let auto;
    let listAutos = this.autoService.getAutosByPlaca(placa).subscribe(data => {
      dataResult = data;
      this.pagoRealizado = this.getSaldoAcumulado(data[0].fentrada);
      this.autoService.deleteAuto(data[0].$key);
    });
    this.variableService.updateVariable('permsalida', {valor: 1});
  }

  onSubmitIngreso() {
    this.autoIngresado = true;
    this.saveAuto();
  }

  onSubmitSalida(placa: string) {
    this.autoRetirado = true;
    this.updateAuto(placa);
  }

  isOcupado() {
    let bools: boolean[] = [];
    this.celdas.forEach(element => {
      element.subscribe(data => {
        bools.push(data.ocupado);
      });
    });
    return bools[0] || bools[1] || bools[2] || bools[3] || bools[4] || bools[5]
  }

  getSaldoAcumulado(fentrada) {
    let fsalida: string = new Date().toString();
    let diffInMs: number = Date.parse(fsalida) - Date.parse(fentrada);
    return (diffInMs / 1000 / 60 / 60) * 2000;
  }
}
