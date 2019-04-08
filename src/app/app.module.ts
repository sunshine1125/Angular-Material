import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '../material-module'
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { PanelComponent } from './panel/panel.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { PizzaPartyComponent } from './snack-bar/snack-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    PanelComponent,
    SnackBarComponent,
    PizzaPartyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
  ],
  exports: [
    PizzaPartyComponent
  ],
  entryComponents: [
    PizzaPartyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
