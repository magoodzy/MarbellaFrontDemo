import { Component, OnInit } from '@angular/core';
import { AddNonConformanceRequest } from 'src/app/Core/interfaces/requests/AddNonConformanceRequest';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { takeWhile } from 'rxjs';
import { ApiRequestService } from 'src/app/Core/http/api-request.service';
import { LoadingService } from 'src/app/Shared/services/loading/loading.service';
import { GenericResponse } from 'src/app/Core/interfaces/responses/GenericResponse';
import { GetTypesOfNonConformanceResponse } from 'src/app/Core/interfaces/responses/GetTypesOfNonConformanceResponse';
import { GetAllNonCoformanceDescriptionSatusResponse } from 'src/app/Core/interfaces/responses/GetAllNonCoformanceDescriptionSatusResponse';
import { GetAllMaterialsResponse } from 'src/app/Core/interfaces/responses/GetAllMaterialsResponse';
@Component({
  selector: 'app-add-non-conformance',
  templateUrl: './add-non-conformance.component.html',
  styleUrls: ['./add-non-conformance.component.scss']
})
export class AddNonConformanceComponent implements OnInit {
  GetTypesOfNonConformanceObj : GetTypesOfNonConformanceResponse[]=[];
  GetAllNonCoformanceDescriptionStatusObj:GetAllNonCoformanceDescriptionSatusResponse[]=[];
  GetAllMaterialsObj:GetAllMaterialsResponse[]=[];
  AddNonConformencResponse=new GenericResponse();
  errMsg:string='';
  userObj:any=localStorage.getItem("XXX");
  userCode=JSON.parse(this.userObj).xxx;
  CompId:any=localStorage.getItem("XXX");
  isSpinner:boolean = false;
  alive:boolean=true;
  isErrMsg:boolean=true;
  customer:any;
  selectedCustomers: any;
  loading: boolean = false;
  allComps:any;

  constructor(public router:Router, private apiService:ApiRequestService,public sharedService:LoadingService) { }

  ngOnInit(): void {
    this.GetTypesOfNonConf();
    this.GetAllNonCoformanceDescriptionStatusFunc();
    this.GetAllNonConMaterial();
  }

  GetAllNonCoformanceDescriptionStatusFunc(){
    this.apiService.get(`${this.apiService.baseUrl}/GetAllNonCoformanceDescriptionSatus`).pipe(takeWhile(() => this.alive)).subscribe(
      (res:any)=>{
        this.GetAllNonCoformanceDescriptionStatusObj=res;
        console.log(this.GetAllNonCoformanceDescriptionStatusObj);
        
      },(err:any)=>{
        this.GetAllNonCoformanceDescriptionStatusObj=[];
      }
    )
  }

  GetTypesOfNonConf(){
    this.apiService.get(`${this.apiService.baseUrl}/GetTypesOfNonConformance`).pipe(takeWhile(() => this.alive)).subscribe(
      (res:any)=>{
        this.GetTypesOfNonConformanceObj=res;
      },(err:any)=>{
        this.GetTypesOfNonConformanceObj=[];
      }
    )
  }

  GetAllNonConMaterial(){
    this.apiService.get(`${this.apiService.baseUrl}/GetAllMaterials`).pipe(takeWhile(() => this.alive)).subscribe(
      (res:any)=>{
        this.GetAllMaterialsObj=res;
      },(err:any)=>{
        this.GetAllMaterialsObj=[];
      }
    ) 
  }


  deleteQuestion(id:number){

    this.apiService.post(`${this.apiService.baseUrl}/DeleteBenefitForm?Id=${id}`).pipe(takeWhile(() => this.alive)).subscribe(
      (res:any)=>{
        console.log(res);
        this.isSpinner=false;
      },(err:any)=>{
        console.log(err);
        this.isSpinner=false;
      }
    )


  }


  submitForm(form:any){
    this.isSpinner=true;
    this.errMsg='';
    
    var AddNonConformanceObj = new AddNonConformanceRequest();

    Object.assign(AddNonConformanceObj,form.value);

    AddNonConformanceObj.companyId=Number(this.CompId);
    AddNonConformanceObj.createdBy=this.userCode;
    AddNonConformanceObj.quantity=Number(AddNonConformanceObj.quantity);
    AddNonConformanceObj.nonConformanceDescId=Number(AddNonConformanceObj.nonConformanceDescId);
    AddNonConformanceObj.descStatusId=Number(AddNonConformanceObj.descStatusId);
    AddNonConformanceObj.typesOfNonConformanceId=Number(AddNonConformanceObj.typesOfNonConformanceId);
    
    

    console.log(AddNonConformanceObj);

    if(form.valid){
      

      this.apiService.post(`${this.apiService.baseUrl}/AddNonConfromanceReport`,AddNonConformanceObj).pipe(takeWhile(() => this.alive)).subscribe(
        (res:any)=>{
          console.log(res);
          this.AddNonConformencResponse.Data=null;
          this.AddNonConformencResponse.Message=res.message;
          this.AddNonConformencResponse.Status=res.status;
          this.isSpinner=false;
        },(err:any)=>{
          console.log(err);
          this.AddNonConformencResponse.Message=err.error.message;
          this.isSpinner=false;
        }
      )

    }else{
      this.isSpinner=false;
      this.AddNonConformencResponse.Message='INVALID DATA!'
    }

  }


}
