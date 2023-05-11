import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, finalize, mergeMap } from "rxjs/operators";
import { ApiService } from "../service/api.service";
import { ENDPOINT_UTILS } from "../../utils/end-point.utils";
import { MasterServiceService } from "../service/master-service.service";
// import { ToastrService } from "ngx-toastr";

const HEADERS = "Authorization";
const API_URL_PREFIX = "api://";
const InterceptorSkipHeader = "X-Skip-Interceptor";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    public masterService: MasterServiceService,
    private apiService: ApiService,
    private http: HttpClient,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //any alteration in httpRequest can be done here
    this.masterService.setLoading(true);
    let url = request.url;
    let requestHeaders = {
      url: url,
      setHeaders: {},
    };

    request = request.clone(requestHeaders);

    request = request.clone({
      headers: request.headers.set("Accept", "application/json"),
    });
    

    const requestUrl = request.url.split("?")[0];

    if (!requestUrl.endsWith("user/login")) {
      request = request.clone({
        headers: request.headers.set(
          "Authorization",
          localStorage[HEADERS] || ""
        ),
      });
    }
 
    const contentTypeHeader = request.headers.get("Content-Type");
    if (contentTypeHeader && requestUrl.endsWith("acs-customer/excel/upload")) {
      const updatedHeaders = request.headers.set(
        "Content-Type",
        "multipart/form-data; boundary=----WebKitFormBoundaryBxsz8IBuCSTMUsDq"
      );
      request = request.clone({ headers: updatedHeaders });
    }

    const headers = request.headers.delete(InterceptorSkipHeader);
    return next.handle(request.clone({ headers })).pipe(
      finalize(() => {
        this.hideLoading();
      }),
      catchError((error) => {
        // this.SpinnerService.hide();
        if (error.status === 500) {
          // this.toaster.error(error.error.message);
        }
        if (error.status === 401) {
          const refreshTokens = localStorage.getItem("refreshToken");
          let userId = localStorage.getItem("userId");
          let data = {
            refreshToken: refreshTokens,
            userId: userId,
          };
          return this.http.post(ENDPOINT_UTILS.auth.refreshToken, data).pipe(
            mergeMap((result: any) => {
              if (result.statusCode === 200) {
                const authToken = result.data.accessToken;
                const refreshToken = result.data.refreshToken;
                localStorage.setItem("Authorization", "Bearer " + authToken);
                localStorage.setItem("refreshToken", refreshToken);
                request = request.clone({
                  setHeaders: {
                    Authorization: authToken,
                  },
                });
              }
              return next.handle(request);
            })
          );
        }
        this.hideLoading();
        throw error;
      })
    );
  }

  hideLoading() {
    setTimeout(() => {
      this.masterService.setLoading(false);
    }, 1000);
  }
  
}