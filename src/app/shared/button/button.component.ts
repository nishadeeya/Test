import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule,MatButtonModule],
 
})
export class ButtonComponent implements OnInit {
  @Input() label:string;
  @Input() disabled:boolean;
  @Input() class:string;
  @Input() color:string;
  @Input() type:string;
  @Input() style: string;
  constructor() { }

  ngOnInit() {
  }
}
