import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tech-test';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(actions.RandomizeData());
  }
}
