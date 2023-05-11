import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TableStandaloneComponent } from '../table-standalone/table-standalone.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterServiceService } from 'src/app/core/service/master-service.service';
import { FloatingComponent } from 'src/app/shared/floating-labels/floating.component';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
// import { DatePickerComponent } from 'src/app/shared/date-picker/date-picker.component';

@Component({
  selector: 'app-floating-labels-standalone',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule, ReactiveFormsModule,  FormsModule,FloatingComponent,MatCommonModule,MatCardModule],
  templateUrl: './floating-labels-standalone.component.html',
  styleUrls: ['./floating-labels-standalone.component.scss']
})
export class FloatingLabelsStandaloneComponent {
  isFormSubmitted:boolean = false;
  floatingLabelForm: FormGroup;
  viewOnly:false
  
  constructor(private masterService: MasterServiceService) { }
  ngOnInit(): void {
    this.floatingLabelForm = new FormGroup({
      mobileNo: new FormControl('', [Validators.required, Validators.pattern("[6-9]{1}[0-9]{9}")]),
    
      
    })
   
  }
  get formvalid() {
    return this.floatingLabelForm.controls;
  }
  getMobileNoErrorMessage() {
    if (this.formvalid['mobileNo'].errors['required']) {
      return 'Required';
    }
    return this.formvalid['mobileNo'].errors['pattern'] ? 'Not a valid Mobile no' : '';
  }
  specialist:any =[
    { id:0,name:""},
    { id:1,name:"Nisha"},
    {id:2,name:"Vanitha"}
   ]
}
