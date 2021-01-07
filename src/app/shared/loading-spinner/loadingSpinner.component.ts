import {Component} from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`,
  styleUrls: ['./loadingSpinner.component.css']
})
export class LoadingSpinnerComponent {

}
