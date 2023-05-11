import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterServiceService } from 'src/app/core/service/master-service.service';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { InputGroupComponent } from 'src/app/shared/input-group/input-group.component';
@Component({
  selector: 'app-input-group-standalone',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule, ReactiveFormsModule,  FormsModule,MatCommonModule,MatCardModule,InputGroupComponent],
  templateUrl: './input-group-standalone.component.html',
  styleUrls: ['./input-group-standalone.component.scss']
})
export class InputGroupStandaloneComponent implements OnInit {
 inputForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
