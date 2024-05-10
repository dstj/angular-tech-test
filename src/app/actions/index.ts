import { createAction, props } from '@ngrx/store';
import { DataPoint } from '../model';

export const RandomizeData = createAction('[Data] Randomize');
export const RandomizeDataSuccess = createAction('[Data] Randomize Success', props<{ dataPoints: DataPoint[]}>());
