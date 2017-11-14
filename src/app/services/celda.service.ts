import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs';
import { Celda } from '../classes/celda';

@Injectable()
export class CeldaService {
  private dbPath: string = "celdas";

  celda: Observable<Celda> = null;
  celdas: Observable<Celda[]> = null;

  constructor(private db: AngularFireDatabase) { }

  getCelda(key: string): Observable<Celda> {
    this.celda = this.db.object(`${this.dbPath}/${key}`).snapshotChanges().map(action => {
      const $key = action.payload.key;
      const data = { $key, ...action.payload.val() };
      return data;
    });
    return this.celda;
  }

  getCeldasList(): Observable<Celda[]> {
    this.celdas = this.db.list(this.dbPath).valueChanges();
    return this.celdas;
  }
}
