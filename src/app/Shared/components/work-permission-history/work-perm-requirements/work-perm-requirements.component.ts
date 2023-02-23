import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { takeWhile } from 'rxjs';
import { ApiRequestService } from 'src/app/Core/http/api-request.service';
import { PermissionsService } from 'src/app/Shared/services/permissions/permissions.service';
@Component({
  selector: 'app-work-perm-requirements',
  templateUrl: './work-perm-requirements.component.html',
  styleUrls: ['./work-perm-requirements.component.scss']
})
export class WorkPermRequirementsComponent implements OnInit {
  alive:boolean=true;
  allRequirements:any;
  HSERequirements:any;
  QARequirements:any;
  MaterialRequirements:any;

  userObj:any=localStorage.getItem("xxx");
  userCode=JSON.parse(this.userObj).xxx;
  dept=JSON.parse(this.userObj).xxx;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public apiService:ApiRequestService,public permission:PermissionsService) { }


  ngOnInit(): void {
    this.getAllRequirements();
  }

  changeStatus(record:any){
    let answer=record.answer==0?1:0;
    let obj={
      id:record.id,
      answer:answer
    }

    this.apiService.post(`${this.apiService.baseUrl}/xxx`,obj).pipe(takeWhile(() => this.alive)).subscribe(
      (res:any)=>{
        this.getAllRequirements();
      },
      (err:any)=>{
        console.log(err);
      }
    )


  }

  getAllRequirements(){
    this.apiService.post(`${this.apiService.baseUrl}/xxx?Id=${this.data.id}`).pipe(takeWhile(() => this.alive)).subscribe(
      (res:any)=>{
        console.log(res.data);
        this.allRequirements=res.data;
        this.HSERequirements=res.data.filter((o:any)=>o.type=='HSE');
        this.QARequirements=res.data.filter((o:any)=>o.type=='QA');
        this.MaterialRequirements=res.data.filter((o:any)=>o.type=='Material');

      },
      (err:any)=>{
        console.log(err);
      }
    )

  }

}
