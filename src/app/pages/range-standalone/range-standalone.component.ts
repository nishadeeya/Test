import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeComponent } from 'src/app/shared/range/range.component';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-range-standalone',
  standalone: true,
  imports: [CommonModule,RangeComponent,MatCardModule],
  templateUrl: './range-standalone.component.html',
  styleUrls: ['./range-standalone.component.scss']
})
export class RangeStandaloneComponent {
  viewOnly:false
  min=4;
  max=70
}
