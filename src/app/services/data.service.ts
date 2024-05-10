import { Injectable } from '@angular/core';
import { DataPoint } from '../model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getData(): Observable<DataPoint[]> {
    return of(this.generateRandomDataPoints(100));
  }

  private generateRandomDataPoints(length: number): DataPoint[] {
    const dataPoints: DataPoint[] = [];
    for (let i = 0; i < length; i++) {
      const randomAmount = Math.floor(Math.random() * 10000);
      const randomDate = new Date(Date.now() - Math.floor(Math.random() * 1000 * 3600 * 24 * 365 * 5));
      dataPoints.push({ date: randomDate, amount: randomAmount });
    }
    return dataPoints.sort((a, b) => a.date.getTime() - b.date.getTime());
  }
}
