import { environment } from '../../../src/environments/environment';

const dfService = environment.apiUrl;

export const ENDPOINT_UTILS = {

  auth: {
    userLogin: `${dfService}${environment.authService}oauth/token`,
    refreshToken: `${dfService}oauth/refreshToken`,
  },

  master: {
    getReportById: `${dfService}${environment.customerService}customer/portal/getCustomerByIdforPortal`,
    getAllRole: `${dfService}${environment.userService}master/getAllRoles`,
    getAllEmployeeList: `${dfService}${environment.userService}user/getAllUsers`,
    getSmDataById: `${dfService}question/tracker/sm`,
    SaveAnswerById: `${dfService}question/tracker/`,
    submitAnswerById: `${dfService}question/tracker/submit`,
    employeeListSearch: `${dfService}${environment.customerService}customer/searchEmployeeByName`,
    getAllLocation: `${dfService}${environment.userService}user/getAllMasterLocation`,
    getMonthlyAmountChart: `${dfService}${environment.customerService}customer/getLastSixMonthSDetailsForPortal`,
    getStatusById: `${dfService}${environment.customerService}customer/getAllCustomerStatusCountForWebPortal`,
    getAllBranchList: `${dfService}${environment.customerService}customer/getAllBranchHeadCollectedAmount`,
    getAmountDetailsById: `${dfService}${environment.customerService}customer/getTotalCollecatedAmountAndTotalPandingAmountWebPortel`,
    getReportFilter: `${dfService}${environment.customerService}customer/filterByMonthYear`,
    getAllempList: `${dfService}user/all`,
    getActivityList:`${dfService}sm/vso/date`,
    getexceldownload: `${dfService}${environment.customerService}customer/users/export/excel`,
    getAllVso:`${dfService}${environment.userService}user/getAllMasterRole`,
    getUserById: `${dfService}${environment.userService}user/getUserById`,
    createUser: `${dfService}${environment.userService}user/saveUser`,
    getAdminEmployeeList: `${dfService}${environment.userService}user/getAllUsers`,
    getActivityListSearch:`${dfService}${environment.userService}user/getAllUsers`,
    getUploadData: `${dfService}${environment.customerService}excel/viewExcelDetails`,
    uploadCreate: `${dfService}${environment.customerService}excel/upload`,
    inactiveEmployee:`${dfService}user/status`,
    activeEmployee:`${dfService}${environment.userService}user/enableUseractive`,
    sampleTemplate:`${dfService}${environment.customerService}customer/users/export/excel/template`
  }

};