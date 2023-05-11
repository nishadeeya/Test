import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT_UTILS } from '../../../app/utils/end-point.utils';


@Injectable({ providedIn: 'root' })
export class AuthService {
  userToken: string;
  refreshTokens: string;
  constructor(
    private http: HttpClient,
  ) { }

  IsLoggedIn() {
    return true
  }

  refreshToken() {
    let userId = localStorage.getItem('userId');
    let data = {
      refreshToken: this.refreshTokens,
      userId: userId
    }
    this.http.post<any>(ENDPOINT_UTILS.auth.refreshToken, data).subscribe((result) => {
      if (result) {
        const authToken = result.data.accessToken;
        localStorage.setItem('Authorization', "Bearer " + authToken);
        localStorage.setItem("refreshToken", result.data.refreshToken)
      }
    })
  }

  logout() {
    localStorage.clear();
  }
}