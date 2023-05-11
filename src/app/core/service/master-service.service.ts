import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_UTILS } from '../../utils/end-point.utils';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MasterServiceService {
  private _isLoading = new BehaviorSubject(false);
  public title = new BehaviorSubject<string>("");
  public pageTitle = this.title.asObservable();

  constructor(private http: HttpClient) { }

  get isLoading() {
    return this._isLoading.asObservable();
  }

  setLoading(status) {
    this._isLoading.next(status);
  }


  getAllEmployeeList(pageNumber) {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getAllEmployeeList}?pageNo=${pageNumber}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }


  getAdminEmployeeList(pageNumber, searchValue) {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getAdminEmployeeList}?pageNo=${pageNumber}&search=${searchValue}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getAllBranchList(locationId) {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getAllBranchList}?locationId=${locationId}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }



  getAdminEmployeeById(userId) {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getUserById}?id=${userId}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getReportFilter(monthYear, branch, pageNo) {
    let url;
    if (branch === null) {
      url = `?monthYear=${monthYear}&pageNo=${pageNo}`

    } else if (monthYear === 'Invalid date') {
      url = `?branch=${branch}&pageNo=${pageNo}`
    }
    else {
      url = `?monthYear=${monthYear}&pageNo=${pageNo}&branch=${branch}`
    }
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getReportFilter}${url}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  employeeListSearch(data: any) {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.employeeListSearch}?firstName=${data}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getUploadList(pageNumber) {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getUploadData}?pageNo=${pageNumber}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }




  getAllRole() {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getAllRole}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }



  getReportById(reportId) {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getReportById}?id=${reportId}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getMonthlyAmountChart() {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getMonthlyAmountChart}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getexceldownload(monthYear, branch, pageNo, filter) {
    const httpOptions = {
      responseType: 'blob' as 'json'
    };
    let url;
    if (branch === null && filter) {
      url = `?monthYear=${monthYear}&pageNo=${pageNo}`
    } else if (monthYear === 'Invalid date' && filter) {
      url = `?branch=${branch}&pageNo=${pageNo}`
    }
    else if (monthYear != 'Invalid date' && branch != null && filter) {
      url = `?monthYear=${monthYear}&pageNo=${pageNo}&branch=${branch}`
    }
    else {
      url = ``
    }
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getexceldownload}${url}`, httpOptions)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
  getSampleExcelDownload() {
    const httpOptions = {
      responseType: 'blob' as 'json'
    };
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.sampleTemplate}`, httpOptions)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getSearchReport(parameters): Observable<HttpResponse<any>> {
    return this.http
      .get<any>(
        environment.apiUrl +
        "acs-customer/customer/search/name?name=" +
        parameters.name,
        { observe: "response" }
      )
      .pipe(
        map((data) => {
          return data;
        })
      );
  }


  getStatusById(branchId) {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getStatusById}?branch=${branchId}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getAmountDetailsById(monthyear) {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.getAmountDetailsById}?monthYear=${monthyear}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  uploadCreate(value: any) {
    return this.http
      .post<any>(`${ENDPOINT_UTILS.master.uploadCreate}`, value)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  orderCreate(parameters): Observable<HttpResponse<any>> {
    const formdata: FormData = new FormData();
    formdata.append("file", parameters);
    return this.http
      .post<any>(
        environment.apiUrl + "acs-customer/excel/upload",
        formdata
      )
  }

  createUser(data: any) {
    return this.http
      .post<any>(`${ENDPOINT_UTILS.master.createUser}`, data)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }



  inactiveEmployee(statusId) {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.inactiveEmployee}?UserId=${statusId}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  activeEmployee(statusId) {
    return this.http
      .get<any>(`${ENDPOINT_UTILS.master.activeEmployee}?UserId=${statusId}`)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}