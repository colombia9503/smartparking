import { Injectable } from '@angular/core';
import { FirebaseObjectObservable, FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated'; 
import {} from 'angularfire2/';
import { Observable, Subject } from 'rxjs';
import { Auto } from '../classes/auto';

@Injectable()
export class AutoService {
  private dbPath: string = "/autos";

  auto: FirebaseObjectObservable<Auto> = null;
  autos: FirebaseListObservable<Auto[]> = null;

  constructor(private db: AngularFireDatabase) { }

  getAuto(key: string): FirebaseObjectObservable<Auto> {
    this.auto = this.db.object(`${this.dbPath}/${key}`);
    return this.auto;
  }

  getAutosList(): FirebaseListObservable<Auto[]> {
    this.autos = this.db.list(this.dbPath);
    return this.autos;
  }

  getAutosByPlaca(placa: string): FirebaseListObservable<Auto[]> {
    this.autos = this.db.list(this.dbPath, {
      query: {
        orderByChild: 'placa',
        equalTo: placa,
        limitToFirst: 1
      }
    });
    return this.autos;
  }

  createAuto(auto: Auto): void {
    this.autos.push(auto);
  }

  updateAuto(key: string, value: any): void {
    this.autos.update(key, value).catch(error => this.handleError(error));
  }

  deleteAuto(key: string): void {
    this.autos.remove(key).catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
