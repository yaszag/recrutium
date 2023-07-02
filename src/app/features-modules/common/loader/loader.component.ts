import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/core/services/spinner/spinner.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor(public spinner: SpinnerService) {}

  loading$ = this.spinner.loading$;

 
}
