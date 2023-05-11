import { Component, ViewChild, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';

export interface TableColumn {
  caption: string;
  field: string;
}
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatIconModule,MatPaginatorModule,FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  public _dataSource = new MatTableDataSource([]);
  public displayedColumns!: string[];
  @Input() class: string;
  @Input() showEditIcon: boolean = false;
  @Input() showViewIcon: boolean = false;
  @Input() columns: TableColumn[];
  @Input() length: number;
  perPage = 10;

  @Output() deleteClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggleClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() viewClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() editClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  toggleForm: FormGroup;
  pageNo: number = 1;
  lengthCount: number;
  @Input() set dataSource(data: any[]) {
    this.setDataSource(data);
  }

  constructor(private fb: FormBuilder) { }

  ngAfterViewInit() {
    this._dataSource.paginator = this.paginator;
    this._dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.toggleForm = this.fb.group({
    })
    this.displayedColumns = this.columns.map((tableColumn: TableColumn) => tableColumn.caption);
  }

  setDataSource(data: any) {
    this._dataSource = new MatTableDataSource(data);
    this.lengthCount = this._dataSource.data.length;
  }

  deleteClickHandler(row: any) {
    this.deleteClick.emit(row);
  }

  toggleClickHandler(event, id) {
    this.toggleClick.emit({ event, id });
  }

  editClickHandler(row: any) {
    this.editClick.emit(row);
  }

  viewClickHandler(row: any) {
    this.viewClick.emit(row);
  }

  applyFilter($event: any) {
    this._dataSource.filter = $event.target.value;
  }

  getPageNo($event: any) {
    this.page.emit($event.pageIndex + 1)
    this.pageNo = $event.pageIndex + 1
  }
  
}

// export class CustomMatPaginatorIntl extends MatPaginatorIntl {
//   let nextPageLabel     = '';
//   let previousPageLabel = '';
//   let lastPageLabel='';
//   let firstPageLabel='';
// }
