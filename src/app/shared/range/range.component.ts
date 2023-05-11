import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-range',
  standalone: true,
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  imports: [CommonModule,ReactiveFormsModule],
 
})
export class RangeComponent {
  public formField: AbstractControl;
  @Input() class: string;
  @Input() style: string;
  @Input() group: FormGroup;
  @Input() type: string = "objectType";
  @Input() name: string;
  @Input() id: string;
  @Input() for: string;
  @Input() label: string;
  @Input() required: boolean;
  @Input() isReadOnly: boolean;
  @Input() disabled: boolean;
  @Input() value: string;
  @Input() isFormSubmitted: boolean;
  @Input() modelValue: string;
  @Input() isEdit = true;
  @Input() isErrorOnChange = false;
  @Input() placeholder = '';
  @Input() max: any = 100;
  @Input() min: any
  @Input() step: number
  @Output() public modelValueChange: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() handleFocus: EventEmitter<any> = new EventEmitter<any>();
  @Output() handleBlur: EventEmitter<any> = new EventEmitter<any>();
  @Output() public change: EventEmitter<any> = new EventEmitter();
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
   
  }
}
