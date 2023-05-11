import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { ENDPOINT_UTILS } from 'src/app/utils/end-point.utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  accessToken: any;
  refreshToken: any;
  isFormSubmitted: boolean;
  public loading;
  roleToken: string;

  constructor(private router: Router, private http: HttpClient, private formBuilder: FormBuilder, private apiService: ApiService) { }
  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]),
      password: ['', Validators.required]
    });
  }
  loginButton() {
    this.router.navigate(['/pages/range']);
    
  }
  get formvalid() {
    return this.loginForm.controls;
  }

}