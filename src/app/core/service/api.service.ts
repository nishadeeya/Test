import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { ToastComponent } from 'src/app/shared/toast/toast.component';

const API_URL_PREFIX = 'api://';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient) { }
  // toasterBar(msg, action) {
  //   this.snackbar.openFromComponent(ToastComponent, {
  //     duration: 2000,
  //     data: { message: msg, action: action },
  //     horizontalPosition: 'right',
  //     verticalPosition: 'top',
  //     panelClass: ['green-snackbar']
  //   });
  // }

  callPostAPI(url: string, parameters: any): Observable<Response> {
    return this.http.post<any>(API_URL_PREFIX + url, parameters)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }

  getSearchList() {
    let url;
    // url = `${ENDPOINT_UTILS.searchList.searchUrl}`;
    return this.http.get<any>(url).pipe(
      map((data) => {
        return data;
      })
    );
  }
  
  callDeleteAPI(url: string): Observable<Response> {
    return this.http.delete<any>(API_URL_PREFIX + url)
      .pipe(map(
        data => {
          return data;
        }
      ));
  }
}
