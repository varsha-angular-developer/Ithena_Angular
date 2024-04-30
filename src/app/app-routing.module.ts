import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MrrChartComponent } from './mrr-chart/mrr-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { MrrStatsByCountryChartComponent } from './mrr-stats-by-country-chart/mrr-stats-by-country-chart.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { MrrCardsComponent } from './mrr-cards/mrr-cards.component';

const routes: Routes = [
  {path:'date-range-picker', component:DateRangePickerComponent},
  {path:'mrr-cards', component:MrrCardsComponent},
  {path:'mrr-chart', component:MrrChartComponent},
  {path:'pie-chart', component:PieChartComponent},
  {path:'stats-by-country-chart', component:MrrStatsByCountryChartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
