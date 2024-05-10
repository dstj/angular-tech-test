import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, map, switchMap } from 'rxjs';
import * as actions from '../actions';
import { DataService } from '../services/data.service';
import { DataPoint } from '../model';
import { Action } from '@ngrx/store';

@Injectable()
export class Effects {
	randomizeData$: Observable<Action> = createEffect(() => {
		return this.actions$.pipe(
			ofType(actions.RandomizeData),
			switchMap(() => this.dataService.getData()),
			map((dataPoints: DataPoint[]) => actions.RandomizeDataSuccess({ dataPoints }))
		);
	});

	constructor(private actions$: Actions, private dataService: DataService) { }
}
