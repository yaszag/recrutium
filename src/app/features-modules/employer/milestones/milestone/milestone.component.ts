import { Component, OnInit, OnDestroy } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subject } from "rxjs";
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { apiResultFormat, milestone, pageSelection } from 'src/app/core/models/models';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestoneComponent implements OnInit, OnDestroy {

  public dtTrigger: Subject<string> = new Subject();
  public lstMilestone!: Array<milestone>;
  public url = "milestones";
  public Toggledata  = false;
  dataSource!: MatTableDataSource<milestone>;
  public searchDataValue = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  constructor(private dataService: ShareDataService) { }
    // pagination variables
    public lastIndex = 0;
    public pageSize = 10;
    public totalData = 0;
    public skip = 0;
    public limit: number = this.pageSize;
    public pageIndex = 0;
    public serialNumberArray: Array<number> = [];
    public currentPage = 1;
    public pageNumberArray: Array<number> = [];
    public pageSelection: Array<pageSelection> = [];
    public totalPages = 0;
    //** / pagination variables

  ngOnInit(): void {
    this.loadMile();

  }
    // Get hostel List  Api Call
    loadMile() {
      this. lstMilestone = this.dataService.mile
    }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  public sortData(sort: Sort) {
    const data = this.lstMilestone.slice();

    if (!sort.active || sort.direction === '') {
      this.lstMilestone = data;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.lstMilestone= data.sort((a, b) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const aValue = (a as any)[sort.active];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  } 
  private getTableData(): void {
    this.lstMilestone = [];
    this.serialNumberArray = [];

    this.data.lstMilestone().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: milestone, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
         
          this.lstMilestone.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<milestone>(this.lstMilestone);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }
  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    }
  }
  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getTableData();
  }
  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData();
  }
  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    for (let i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }

}
