import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MrrChartComponent } from './mrr-chart/mrr-chart.component';
import { MrrStatsByCountryChartComponent } from './mrr-stats-by-country-chart/mrr-stats-by-country-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
// import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, NativeDateAdapter} from '@angular/material/core';
import { MrrCardsComponent } from './mrr-cards/mrr-cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    MrrChartComponent,
    MrrStatsByCountryChartComponent,
    PieChartComponent,
    DateRangePickerComponent,
    MrrCardsComponent,
    DashboardComponent,
    // DonutChartComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
