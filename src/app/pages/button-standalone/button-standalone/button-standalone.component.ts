import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-button-standalone',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatCardModule,RouterModule,ButtonComponent,FormsModule],
  templateUrl: './button-standalone.component.html',
  styleUrls: ['./button-standalone.component.scss']
})
export class ButtonStandaloneComponent  {
  viewOnly:false
  constructor() { }

  ngOnInit(): void {
  }

}
