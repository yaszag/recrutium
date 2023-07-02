import { Component, OnInit,  } from '@angular/core';

// import { Subject } from "rxjs";
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Sort } from '@angular/material/sort';
import { ShareDataService } from 'src/app/core/data/share-data.service';
import { apiResultFormat, freelancer } from 'src/app/core/models/models';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {

  public lstAll!: Array<freelancer>;
  public url = "admin";
  public searchDataValue = '';
  dataSource!: MatTableDataSource<freelancer>;

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
  constructor(  private data: ShareDataService ) { }

  ngOnInit(): void {
    this.getTableData();

  }

      // Get hostel List  Api Call
      loadAll() {
        // this.lstAll = this.dataService.freelancerall
      }
  
      private getTableData(): void {
        this.lstAll = [];
        this.serialNumberArray = [];
    
        this.data.freelancerActiveData().subscribe((res: apiResultFormat) => {
          this.totalData = res.totalData;
          res.data.map((res: freelancer, index: number) => {
            const serialNumber = index + 1;
            if (index >= this.skip && serialNumber <= this.limit) {
              res.id = serialNumber;
              this.lstAll.push(res);
              this.serialNumberArray.push(serialNumber);
            }
          });
             this.dataSource = new MatTableDataSource<freelancer>(this.lstAll);
        this.calculateTotalPages(this.totalData, this.pageSize);
        });
    
     
      }
      public sortData(sort: Sort) {
        const data = this.lstAll.slice();
    
        if (!sort.active || sort.direction === '') {
          this.lstAll = data;
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          this.lstAll = data.sort((a: any, b: any) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const aValue = (a as any)[sort.active];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const bValue = (b as any)[sort.active];
            return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
          });
        }
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
      public searchData(value: any): void {
        this.dataSource.filter = value.trim().toLowerCase();
        this.lstAll = this.dataSource.filteredData;
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
    
      public changePageSize(): void {
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
export interface pageSelection {
  skip: number;
  limit: number;
}