import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatGridListModule,RouterModule,ButtonComponent,FormsModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
constructor(private auth: AuthService,private router: Router){}

logOut() {
  // this.logoutModal.nativeElement.click();
  this.auth.logout();
  this.router.navigate(['login']);
}
range(){
  this.router.navigate(['/pages/range']);
}
inputGroup(){
  this.router.navigate(['/pages/inputgroup']);
}
floatingLable(){
  this.router.navigate(['/pages/float']);
}
Table(){
  this.router.navigate(['/pages/table']);
}
button(){
  this.router.navigate(['/pages/button']);
}
}
