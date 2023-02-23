import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  userObj:any=localStorage.getItem("XXX");
  dept = this.userObj? JSON.parse(this.userObj).XXX:'';
  level = this.userObj?JSON.parse(this.userObj).XXX:0;
  hrCode = this.userObj? JSON.parse(this.userObj).XXX:'';

  secretPermissionCodeList=[];
  allPermissionsCodeList=[];
  highHRPermissionCodeList=[];
  HRPermissionsCodeList=[];
  HRNotIncludePermissionCodeList=[];
  FinancePermissionsCodeList=[];
  FinanceHRPermissionsCodeList=[];
  overtimeHistoryPermissionCodeList=[];
  managerPermissionsCodeList=[];
  hrManagerPermissionsCodeList=[];
  itPermissionsCodeList=[];
  securityPermissionsCodeList=[];
  hrRecruitersCodeList=[];
  salaryDetailsPermissionsCodeList=[];
  managerAttendanceCodeList=[];
  approveTransportationCodeList=[];
  editAttendanceCodeList=[]
  saveAttendanceCodeList=[]
  clinicPermissionCodeList=[];
  bulkEditCodeList=[];
  incentiveHistoryPermissionsCodeList=[];
  incentiveFormPermissionCodeList=[]
  HRSectionHeadCodeList=[];
  teamAttendancePermissionsCodeList=[];
  cctvPermissionCodeList=[];

  /// كود يحيى 117393
  transportationAttendanceCodeList=[];
  getHistoryTransportationPermissionCodeList=[];
  bulkPermissionCodeList = [

];

getFleetPermissionCodeList=[];
getTransAttendancePermissionCodeList=[];
getHSEPermissionCodeList=[];
getQAPermissionCodeList=[];
getPayrollCodeList=[];
salaryDetailsCodeList=[];
getHigherManagersOnlyPermissionCodeList=[];

RNDPermissionsCodeList=[];

  constructor() { }

  //0
  getStandardPermission(){
    return true
  }

  getLevelHigherThanGivenLevel(hrCode:any,level:any){
    if(this.secretPermissionCodeList.find((o:any)=>o == hrCode) || this.level>Number(level)){
      return true;
    } else {
      return false
    }
  }


  getPayrollPermission(hrCode:any){
    if(this.secretPermissionCodeList.find((o:any)=>o == hrCode) || this.getPayrollCodeList.find((o:any)=>o==hrCode)){
      return true;
    } else {
      return false
    }
  }

  getSalaryDetailsPermission(hrCode:any){
    if(this.secretPermissionCodeList.find((o:any)=>o == hrCode) || this.salaryDetailsCodeList.find((o:any)=>o==hrCode)){
      return true;
    } else {
      return false
    }
  }
  getSecretPermission(hrCode:any){
    if(this.secretPermissionCodeList.find((o:any)=>o == hrCode)){
      return true;
    } else {
      return false
    }
  }

  //1
  getAllPermissions(hrCode:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode)){
      return true;
    } else {
      return false
    }
  }

  getOverTimeHistoryPermission(hrCode:any,dept:any){
    if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes("HR") || this.overtimeHistoryPermissionCodeList.find((o:any)=>o == hrCode)) && !this.HRNotIncludePermissionCodeList.find((o:any)=>o==hrCode)){
      return true;
    } else {
      return false
    }
  }

  getHighHRPermission(hrCode:any){
    if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || this.highHRPermissionCodeList.find((o:any)=>o == hrCode))){
      return true;
    } else {
      return false
    }
  }

  getTransportationAttendance(hrCode:any,dept:any){
    if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes("CCTV") || this.transportationAttendanceCodeList.find((o:any)=>o == hrCode))){
      return true;
    } else {
      return false
    }
  }

  getIncentiveFormPermission(hrCode:any){
    if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || this.incentiveFormPermissionCodeList.find((o:any)=>o == hrCode))){
      return true;
    } else {
      return false
    }
  }

  getTransAttendancePermission(hrCode:any,dept:any){
    if(this.getFleetPermission(hrCode) || this.getCCTVPermission(hrCode,dept) || this.getTransAttendancePermissionCodeList.find((o:any)=>o == hrCode)){
      return true;
    }else{
     return false;
    }
  }

  //2
  getHRPermissions(dept:any,hrCode:any){
    if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes("HR") || this.HRPermissionsCodeList.find((o:any)=>o == hrCode))&& !this.HRNotIncludePermissionCodeList.find((o:any)=>o==hrCode)){
      return true;
    } else {
      return false
    }
  }

  getRNDPermissions(dept:any,hrCode:any){
    if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes("R&D") || this.RNDPermissionsCodeList.find((o:any)=>o == hrCode))){
      return true;
    } else {
      return false
    }
  }

  getHSEPermissions(dept:any,hrCode:any){
    if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes("HSE") || this.getHSEPermissionCodeList.find((o:any)=>o == hrCode))){
      return true;
    } else {
      return false
    }
  }
  getQAPermissions(dept:any,hrCode:any){
     if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes("QA") || this.getQAPermissionCodeList.find((o:any)=>o == hrCode))){
      return true;
    } else {
      return false
    }
  }

  getHRRecruitersPermissions(hrCode:any){
    if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || this.hrRecruitersCodeList.find((o:any)=>o == hrCode))){
      return true;
    } else {
      return false
    }
  }

  getFinancePermissions(dept:any,hrCode:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) ||dept.includes("Finance") || this.FinancePermissionsCodeList.find((o:any)=>o == hrCode)){
      return true;
    } else {
      return false
    }
  }
  getFinanceHRPermissions(dept:any,hrCode:any){
    if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes("Finance") || dept.includes("HR") || this.FinanceHRPermissionsCodeList.find((o:any)=>o == hrCode)) && !this.HRNotIncludePermissionCodeList.find((o:any)=>o==hrCode)){
      return true;
    } else {
      return false
    }
  }

  getSalaryDetailsPermissions(hrCode:any,dept:any,level:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || (dept.includes('HR') && level>5) || (dept.includes('Finance') && level>5) || this.salaryDetailsPermissionsCodeList.find((o:any)=>o == hrCode)){
      return true;
    } else {
      return false
    }
  }

  //3
  getManagerPermissions(hrCode:any,dept:any,level:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || level > 5 || this.managerPermissionsCodeList.find((o:any)=>o == hrCode) || this.bulkPermissionCodeList.find((o:any)=> o==hrCode)){
      return true;
    } else {
      return false
    }
  }

  getHigherManagersOnlyPermission(hrCode:any,level:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || level >= 7 || this.getHigherManagersOnlyPermissionCodeList.find((o:any)=>o == hrCode)){
      return true;
    } else {
      return false
    }
  }

  //4
  getHrManagerPermissions(hrCode:any,dept:any,level:any){
    if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes('HR') || level > 5 ||  this.hrManagerPermissionsCodeList.find((o:any)=>o == hrCode))&& !this.HRNotIncludePermissionCodeList.find((o:any)=>o==hrCode) ){
      return true;
    } else {
      return false
    }
  }

  //5
  getItPermissions(hrCode:any,dept:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes('IT') || this.itPermissionsCodeList.find((o:any)=>o == hrCode)){
      return true;
    }else{
      return false;
    }
  }


  //6
  getBulkPermission(hrCode:any,dept:any,level:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || level>=5 || this.bulkPermissionCodeList.find((o:any)=>o == hrCode)){
      return true;
    }else{
      return false;
    }
  }

  getHRBulkVacPermission(hrCode:any,dept:any,level:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode)||dept.includes("HR") || level>=6 || this.bulkPermissionCodeList.find((o:any)=>o == hrCode)){
      return true;
    }else{
      return false;
    }
  }

  //7
  getClinicPermission(hrCode:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || this.clinicPermissionCodeList.find((o:any)=>o == hrCode)){
      return true;
    }else{
      return false;
    }
  }

  getBulkEditPermission(hrCode:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || this.bulkEditCodeList.find((o:any)=>hrCode)){
      return true
    }else{
      return false
    }
  }

  //9
  getSecurityPermissions(dept:any,hrCode:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes("Security") || this.securityPermissionsCodeList.find((o:any)=>o == hrCode)){
      return true;
    } else {
      return false
    }
  }


  getFleetPermission(hrCode:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || this.getFleetPermissionCodeList.find((o:any)=>o==hrCode)){
      return true
    }else{
      return false
    }
  }

  getHRSectionHeadPermission(dept:any,hrCode:any,level:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || this.HRSectionHeadCodeList.find((o:any)=>o==hrCode) ){
      return true;
    }else{
      return false
    }
  }
  getHRSectionHeads(dept:any,hrCode:any,level:any){

    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || this.HRSectionHeadCodeList.find((o:any)=>o==hrCode)){
      return true
    }else{
      return false
    }
  }

  getManagerAttendancePermission(hrCode:any){

    if(this.allPermissionsCodeList.find((o:any)=>o === hrCode) || this.managerAttendanceCodeList.find((o:any)=>o===hrCode)){
      return true
    }else{
      return false
    }
  }

  getApproveTransportationPermission(hrCode:any){
    if(this.allPermissionsCodeList.find((o:any)=>o === hrCode) || this.approveTransportationCodeList.find((o:any)=>o===hrCode)){
      return true
    }else{
      return false
    }
  }

  getHistoryTransportationPermission(hrCode:any,dept:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes("Security") || dept.includes("CCTV") || this.getHistoryTransportationPermissionCodeList.find((o:any)=>o == hrCode)){
      return true;
    } else {
      return false
    }
  }

  getCCTVPermission(hrCode:any,dept:any){
    if(this.allPermissionsCodeList.find((o:any)=>o == hrCode) ||  dept.includes("CCTV") || this.cctvPermissionCodeList.find((o:any)=>o == hrCode)){
      return true;
    } else {
      return false
    }
  }



  getEditAttendancePermission(hrCode:any,dept:any,level:any){
    if(this.allPermissionsCodeList.find((o:any)=>o === hrCode) || this.editAttendanceCodeList.find((o:any)=>o === hrCode) || (dept.includes('HR') && level > 5)){
      return true;
    } else {
      return false
    }
  }

  getSaveAttendancePermission(hrCode:any,dept:any,level:any){
    if(this.allPermissionsCodeList.find((o:any)=>o === hrCode) || this.saveAttendanceCodeList.find((o:any)=>o === hrCode) || (dept.includes('HR') && level > 5)){
      return true;
    } else {
      return false
    }
  }
  //116531
  getTeamAttendancePermission(hrCode:any,dept:any,level:any){
    if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) || dept.includes("HR") || this.teamAttendancePermissionsCodeList.find((o:any)=>o == hrCode))&& !this.HRNotIncludePermissionCodeList.find((o:any)=>o==hrCode)){
      return true;
    } else {
      return false
    }
  }

  getIncentiveHistoryPermission(hrCode:any){
  if((this.allPermissionsCodeList.find((o:any)=>o == hrCode) ||  this.incentiveHistoryPermissionsCodeList.find((o:any)=>o == hrCode))){
      return true;
    } else {
      return false
    }
  }

}
