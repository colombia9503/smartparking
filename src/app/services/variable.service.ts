import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs';
import { Variable } from '../classes/variable';
@Injectable()
export class VariableService {
  private dbPath = "variables";

  variable: Observable<Variable> = null;
  variables: Observable<Variable[]> = null;

  constructor(private db: AngularFireDatabase) { }

  getVariable(key: string): Observable<Variable> {
    this.variable = this.db.object(`${this.dbPath}/${key}`).valueChanges();
    return this.variable;
  }

  getVariablesList(): Observable<Variable[]> {
    this.variables = this.db.list(this.dbPath).valueChanges();
    return this.variables;
  }

  updateVariable(key: string, value: any): void {
    this.db.list(this.dbPath).update(key, value);
  } 
}
