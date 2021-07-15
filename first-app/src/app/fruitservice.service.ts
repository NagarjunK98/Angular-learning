import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFruits } from './fruits/fruits';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FruitserviceService {
  constructor(private http: HttpClient) {}
  private _URL: string = './../../assets/data/fruits.json';
  getFruits(): Observable<IFruits[]> {
    return this.http.get<IFruits[]>(this._URL);
  }
}
