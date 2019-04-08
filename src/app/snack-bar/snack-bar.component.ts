import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent {
  type = 1;
  durationInSeconds = 5;
  useCustom = false;
  config = {};
  constructor(
    private snackBar: MatSnackBar
  ) { }

  chooseType(type) {
    this.useCustom = type === 1 ? false : true;
  }

  openSnackBar() {
    if(this.useCustom) {
      this.config = {
        duration: null
      }
    } else {
      this.config = {
        duration: this.durationInSeconds * 1000
      }
    }
    this.snackBar.openFromComponent(PizzaPartyComponent, this.config);
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  template: `<span class="example-pizza-party">
              Pizza party!!! 🍕
            </span>
            <button class="right" mat-icon-button (click)="close()"><mat-icon>close</mat-icon></button>`,
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
    .right {
      float: right;
    }
  `],
})
export class PizzaPartyComponent {
  constructor(
    private snackBar: MatSnackBar,
  ) { }

  close() {
    // alert(1);
    return this.snackBar.dismiss();
  }
}
