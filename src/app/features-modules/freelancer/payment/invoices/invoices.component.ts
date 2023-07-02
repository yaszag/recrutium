import { Component, OnInit,  OnDestroy } from '@angular/core';

import { Subject } from "rxjs";
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { invoice } from 'src/app/core/models/models';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit, OnDestroy {

  public dtTrigger: Subject<string> = new Subject();
  public lstInvoice!: Array<invoice>;
  public url = "freelancer";
  constructor(private dataService: ShareDataService) { }

  ngOnInit(): void {
    this.loadInvoice();

  }
    // Get payment List  Api Call
    loadInvoice() {
      this.lstInvoice = this.dataService.invoice
    }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
