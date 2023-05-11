import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { SideNavComponent } from '../common/side-nav/side-nav.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  scroll:string;
} 

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatGridListModule,RouterModule,SideNavComponent],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  titleSubscribe:Subscription;
  pageTitle;
  header: Tile[] = [
    {text: 'One', cols: 12, rows: 1, color: 'lightblue',scroll:''},
  ];
  sidenav: Tile[] = [
    {text: 'Two', cols: 12, rows: 1, color: '#F9F9F9',scroll:''},
  ];
  mainContent: Tile[] = [
    {text: 'Three', cols: 12, rows: 4, color: '#F9F9F9', scroll:'',},
  ];
}




