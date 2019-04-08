import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from "./table/table.component";
import { FormComponent } from "./form/form.component"
import { PanelComponent } from "./panel/panel.component"
import { SnackBarComponent } from "./snack-bar/snack-bar.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'snackBar', component: SnackBarComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
