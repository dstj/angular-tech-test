import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataPoint } from '../model';
import { Store } from '@ngrx/store';
import { selectDataPoints } from '../reducers';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  dataPoints$: Observable<DataPoint[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.dataPoints$ = this.store.select(selectDataPoints);
  }

  public triggerRandomizeData(): void {
    alert('Not implemented yet!');
  }
}
