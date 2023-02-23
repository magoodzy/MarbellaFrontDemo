import { Injectable } from '@angular/core';
import { ApiRequestService } from 'src/app/Core/http/api-request.service';
import { takeWhile } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedFunctionsService {
  alive:boolean=true;

  allComps:any;
  allUsersByCompID:any;
  constructor(public apiService:ApiRequestService) { }

  async getAllCompanies(){
   await this.apiService.get(`${this.apiService.baseUrl}/getAllCompanies`).pipe(takeWhile(() => this.alive)).toPromise().then(
      (res:any)=>{
        this.allComps = res.data;
      }
    )
      return this.allComps;
  }

  getUserByCompanyID(subCode:any='',comp:any=1){
    let obj={
      subCode: subCode,
      companyId: Number(comp),
      pageSize: 1600,
      pageNumber: 1
    }
    this.apiService.post(`${this.apiService.baseUrl}/GetUserByComapanyId`,obj).pipe(takeWhile(() => this.alive)).subscribe(
      (res:any)=>{
        // console.log(res);
        this.allUsersByCompID=res.userData;
      },(err:any)=>{
        console.log(err);
      }
    )

  }
}
