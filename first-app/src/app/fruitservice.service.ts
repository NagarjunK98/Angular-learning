import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IFruits } from './fruits/fruits';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root',
})
export class FruitserviceService {
  constructor(private http: HttpClient) {}

  private _URL: string = './../../assets/data/fruits.json';

  getFruits(): Observable<IFruits[]> {
    return this.http.get<IFruits[]>(this._URL).catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throwError(error.message || 'Server error');
  }
}
