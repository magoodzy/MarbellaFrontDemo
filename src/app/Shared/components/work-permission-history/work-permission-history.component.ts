import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { takeWhile } from 'rxjs';
import { ApiRequestService } from 'src/app/Core/http/api-request.service';
import { LoadingService } from 'src/app/Shared/services/loading/loading.service';
import { PermissionsService } from 'src/app/Shared/services/permissions/permissions.service';
import { AppRejWorkPermissionComponent } from './app-rej-work-permission/app-rej-work-permission.component';
import { WorkPermDetailsComponent } from './work-perm-details/work-perm-details.component';
import { WorkPermRequirementsComponent } from './work-perm-requirements/work-perm-requirements.component';


@Component({
  selector: 'app-work-permission-history',
  templateUrl: './work-permission-history.component.html',
  styleUrls: ['./work-permission-history.component.scss']
})
export class WorkPermissionHistoryComponent implements OnInit {

  @Input() type:string='';

  date14: Date = new Date();
  depts:any;
  userData:any;
  pageSize = 10;
  pageIndex=0;
  pageLength:number = 10;
  presentCount:any;
  absentCount:any;
  customer:any;
  colorStatus:any;
  tableForm:any;
  subCode:any;
  deptId:any;
  isChecked:boolean=false;
  isSpinner:boolean = false;
  isErrMsg:boolean=false;

  isInStatus:string='Approved';

  appObj:any;

  companies:any;
  manager:any;

  userObj:any = localStorage.getItem("xxx");
  dept = JSON.parse(this.userObj).xxx;
  code = JSON.parse(this.userObj).xxx;
  level=JSON.parse(this.userObj).xxx;
  companyId=JSON.parse(this.userObj).xxx;
  allDepts=JSON.parse(this.userObj).xxx;
  CompId=localStorage.getItem("xxxx");

  appRejObj:any;


  overTimeArr1:any;
    selectedCustomers: any;

    representatives:any;

    statuses: any;

    loading: boolean = false;

    activityValues: number[] = [0, 100];

     rangeDates: Date[]=[];


    @ViewChild('dt') table: any;

    editStage:boolean=false;


  requiredDate:string[]=[];

  Months =
   ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  date:any;
  firstDay:any;
  lastDay:any;
  alive:boolean = true;
  dataSource:any;
  allComps:any;
  compId:number=Number(this.CompId);
  userInSameDepts:any;
  deptList:any[]=[];

  constructor(public dialog:MatDialog,private apiService:ApiRequestService,private primengConfig: PrimeNGConfig,public sharedService:LoadingService,public router:Router,public permission:PermissionsService) { }

  ngOnInit(): void {

    for (const iterator of this.allDepts) {
      this.deptList.push(iterator.id);
    }
    this.isErrMsg=true;
    this.isSpinner=false;

    this.getAllCompanies();
    this.getAllWorkPermissions();
    this.getUsersSameDept();

    // this.getAbsenceReport();

    }

    redirectTicketRequest(record:any,user:any){
      let obj={
          id: record.id,
          subCode: record.requester,
          redirectTo:user
      }

      this.apiService.post(`${this.apiService.baseUrl}/xxx`,obj).pipe(takeWhile(() => this.alive)).subscribe(
        (res:any)=>{

          this.getAllWorkPermissions();

        },(err:any)=>{
          console.log(err);

        }
      )
    }

    getUsersSameDept(){


      let obj={
            pageNumber: 1,
            pageSize: 1200,
            companyId:this.compId,
            subCode: "",
            activeOrNot:true
      }

      this.apiService.post(`${this.apiService.baseUrl}/xxx`,obj).pipe(takeWhile(() => this.alive)).subscribe(
        (res:any)=>{
          // console.log(res);
          this.userInSameDepts=res.userData.filter((o:any)=>o.subCode !== '110521');
          this.userInSameDepts=this.userInSameDepts.filter((o:any)=>!o.level.includes('B') ||!o.level.includes('C'));
          this.userInSameDepts=this.userInSameDepts.sort(function(a:any, b:any) {
            var textA = a.fullEnglishName.toUpperCase();
            var textB = b.fullEnglishName.toUpperCase();

            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        },(err:any)=>{
          console.log(err);

        }
      )
    }

    getAllWorkPermissions(compId:any=this.CompId){
      this.compId=Number(compId);
      this.apiService.get(`${this.apiService.baseUrl}/xxx?CompanyId=${compId}`).pipe(takeWhile(() => this.alive)).subscribe(
        (res:any)=>{
          this.customer=res.data;
        },
        (err:any)=>{
          console.log(err);
        }
      )
    }

    getAllCompanies(){
      this.apiService.get(`${this.apiService.baseUrl}/xx`).pipe(takeWhile(() => this.alive)).subscribe(
        (res:any)=>{
          // console.log(res.data);
          this.allComps = res.data;
        },
        (err:any)=>{
          console.log(err);

        }
      )

    }

    openApp(record:any,type:string){
      console.log(record);

      record.newType=type
      let dialogRef = this.dialog.open(AppRejWorkPermissionComponent,{
        width:'600px',
        height:'600px',
        data:record,
      })

      dialogRef.afterClosed().subscribe(()=>{
        this.getAllWorkPermissions(this.compId);
      })
    }

    getDetails(record:any){
      console.log(record);
      this.dialog.open(WorkPermDetailsComponent,{
        width:'600px',
        height:'600px',
        data:record
      })
    }

    appRej(record:any,type:string,status:string){
      let obj=
      {
          id: record.id,
          status: status,
          type: type,
          approvedBy: this.code
      }
      this.apiService.post(`${this.apiService.baseUrl}/xxx`,obj).pipe(takeWhile(() => this.alive)).subscribe(
        (res:any)=>{
          this.getAllWorkPermissions(this.compId);
        },
        (err:any)=>{
          console.log(err);
        }
      )


    }

    getRequirements(record:any){
      console.log(record);
      this.dialog.open(WorkPermRequirementsComponent,{
        width:'600px',
        height:'600px',
        data:record
      })

    }



    onActivityChange(event:any) {
      const value = event.target.value;
      if (value && value.trim().length) {
          const activity = parseInt(value);
          if (!isNaN(activity)) {
              this.table.filter(activity, 'activity', 'gte');
          }
      }
    }


    formatDate(date:any) {
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (month < 10) {
          month = '0' + month;
      }

      if (day < 10) {
          day = '0' + day;
      }

      return date.getFullYear() + '-' + month + '-' + day;
    }

      onRepresentativeChange(event:any) {
      this.table.filter(event.value, 'representative', 'in')
    }

}
