import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { GraphComponent } from './graph/graph.component';
import { TableComponent } from './table/table.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { DataService } from './services/data.service';
import { dataReducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './effects';

@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		GraphComponent,
		TableComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot({ data: dataReducer }),
		EffectsModule.forRoot([Effects]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })

	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
