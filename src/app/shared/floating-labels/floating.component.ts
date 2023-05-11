import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
    selector: 'app-floating',
    standalone: true,
    imports: [CommonModule,MatInputModule,ReactiveFormsModule,FormsModule,NgSelectModule],
     templateUrl: './floating.component.html',
     styleUrls: ['./floating.component.scss']
})

export class FloatingComponent implements OnInit {

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
  @Input() maxLength: number = 100;
  @Input() options: any[];
  @Input() things: any[];
  @Input() labelKey: string;
  @Input() valueKey: string;
  @Input() isWhole = false;
  @Output() public modelValueChange: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() handleFocus: EventEmitter<any> = new EventEmitter<any>();
  @Output() handleBlur: EventEmitter<any> = new EventEmitter<any>();
  @Output() public change: EventEmitter<any> = new EventEmitter();

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
   
  }

  onFocus(evt: any) {
    this.handleFocus.emit(evt);
  }

  onBlur(evt: any) {
    this.handleBlur.emit(evt);
  }

  onValueChange(evt: any) {
    this.change.emit(evt.target.value);
    this.modelValueChange.emit(evt.target.value);
  }
  

}