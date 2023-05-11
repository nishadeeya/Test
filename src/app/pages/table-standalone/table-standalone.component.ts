import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from 'src/app/shared/table/table.component';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-table-standalone',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,MatIconModule
  ],
  templateUrl: './table-standalone.component.html',
  styleUrls: ['./table-standalone.component.scss']
})
export class TableStandaloneComponent {
  employeeForm:FormGroup
 
  projectColumns: any[];
  projectTableData = [
    { position: 1, name: 'Nisha', emailId: "nisha@gmail.com", mobileNo: 9879098767 },
    { position: 2, name: 'Subathra', emailId: "suba@gmail.com", mobileNo: 8879098777},
    { position: 3, name: 'Vanitha', emailId: "vani@gmail.com", mobileNo: 9379098345 },
    { position: 4, name: 'Rudra', emailId: "rudra@gmail.com", mobileNo: 9879545667 },
    { position: 5, name: 'Deeya', emailId: "deeya@gmail.com", mobileNo: 8875098767 },
  ]
 

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
    })
    this.projectColumns = this.getprojectColumns();
  }
  getprojectColumns(): any[] {
    return [
      { caption: 'Id', field: 'position' },
      { caption: 'Name', field: 'name' },
      { caption: 'Email Id', field: 'emailId' },
      { caption: 'Mobile No', field: 'mobileNo' },
      { caption: 'Action', field: 'action' }
    ];
  }
  edit(e){
  }
  view(e){
  }
}
