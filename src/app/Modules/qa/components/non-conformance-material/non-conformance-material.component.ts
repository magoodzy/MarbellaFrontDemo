import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { takeWhile } from 'rxjs';
import { ApiRequestService } from 'src/app/Core/http/api-request.service';
import { LoadingService } from 'src/app/Shared/services/loading/loading.service';
@Component({
  selector: 'app-non-conformance-material',
  templateUrl: './non-conformance-material.component.html',
  styleUrls: ['./non-conformance-material.component.scss']
})
export class NonConformanceMaterialComponent implements OnInit {
  errMsg:string='';
  userToken:any;
  userObj:any=localStorage.getItem("XXX");
  userCode=JSON.parse(this.userObj).XXX;
  equip:string='sadasdasd'
  isSpinner:boolean = false;
  alive:boolean=true;
  passVisible:boolean=false;
  allDays:any;
  positions:any;
  isErrMsg:boolean=true;
  customer:any;
  selectedCustomers: any;
  loading: boolean = false;
  allComps:any;
  compId:any;
  companyName:string='';

  answerTypes = [
    {id:1,name:'Text'},
    {id:2,name:'Number'},
    {id:3,name:'YesOrNo'},
    {id:4,name:'Date'},
    {id:5,name:'Place'},
  ]

  AlfaId=[3,4,5];

  constructor(public router:Router, private apiService:ApiRequestService,public sharedService:LoadingService) { }

  ngOnInit(): void {
    this.getAllForms();
  }




  deleteQuestion(id:number){

    this.apiService.post(`${this.apiService.baseUrl}/DeleteBenefitForm?Id=${id}`).pipe(takeWhile(() => this.alive)).subscribe(
      (res:any)=>{
        console.log(res);
        this.isSpinner=false;
        this.getAllForms()
      },(err:any)=>{
        console.log(err);
        this.isSpinner=false;
      }
    )


  }


  submitForm(form:any){
    this.isSpinner=true;
    this.errMsg='';

    console.log(form);

    if(form.valid){

      let obj=
      {
          name: form.value.name,
          price: Number(form.value.price),
          unit: form.value.unit,
          createdBy:this.userCode
      }
      console.log(obj);
      this.apiService.post(`${this.apiService.baseUrl}/AddMaterials`,obj).pipe(takeWhile(() => this.alive)).subscribe(
        (res:any)=>{
          console.log(res);
          this.errMsg=res.message;
          this.isSpinner=false;
          this.getAllForms();
        },(err:any)=>{
          console.log(err);
          this.errMsg=err.message;
          this.isSpinner=false;
        }
      )

    }else{
      this.isSpinner=false;
      this.errMsg='INVALID DATA!'
    }

  }

  getAllForms(){

    this.apiService.get(`${this.apiService.baseUrl}/GetAllMaterials`).pipe(takeWhile(() => this.alive)).subscribe(
      (res:any)=>{
        console.log(res);
        this.customer=res;
        this.isSpinner=false;
        this.isErrMsg=false;

      },(err:any)=>{
        console.log(err);
        this.errMsg=err.message;
        this.isSpinner=false;
        this.isErrMsg=false;

      }
    )
  }
}
