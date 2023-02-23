import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeWhile } from 'rxjs';
import { ApiRequestService } from 'src/app/Core/http/api-request.service';

@Component({
  selector: 'app-app-rej-work-permission',
  templateUrl: './app-rej-work-permission.component.html',
  styleUrls: ['./app-rej-work-permission.component.scss']
})
export class AppRejWorkPermissionComponent implements OnInit {
  userObj:any = localStorage.getItem("userObj");
  dept = JSON.parse(this.userObj).deptName;
  code = JSON.parse(this.userObj).userCode;
  companyId=JSON.parse(this.userObj).companyId;
  CompId=localStorage.getItem("CompId");
  alive:boolean=true;
  errMsg:string=''
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public apiService:ApiRequestService) { }

  ngOnInit(): void {
  }

  appRej(record:any,type:string,status:string,instructions:string){
    this.errMsg='';
    let obj=
    {
        id: record.id,
        status: status,
        type: type,
        approvedBy: this.code,
        hseInstructions: this.data.newType=='HSE'?instructions:'',
        qaInstructions: this.data.newType=='QA'?instructions:'',
    }
    this.apiService.post(`${this.apiService.baseUrl}/xxx`,obj).pipe(takeWhile(() => this.alive)).subscribe(
      (res:any)=>{
        this.errMsg=res.message;
      },
      (err:any)=>{
        console.log(err);
        this.errMsg=err.error.message;

      }
    )


  }

}
