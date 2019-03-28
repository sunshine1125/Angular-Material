import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from "./table/table.component";
import { FormComponent } from "./form/form.component"
import { PanelComponent } from "./panel/panel.component"

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'panel', component: PanelComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
