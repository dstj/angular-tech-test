import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { DataPoint } from '../model';
import * as AppActions from '../actions';

export interface AppState {
	data: DataPoint[];
}

const initialState: AppState = {
	data: [],
};

export const dataReducer = createReducer(
	initialState,
	on(AppActions.RandomizeDataSuccess, (state, { dataPoints }) => ({ ...state, data: dataPoints })),
);

export const selectData = createFeatureSelector<AppState>('data');
export const selectDataPoints = createSelector(selectData, (state) => state.data);
