import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionsService } from 'src/app/Shared/services/permissions/permissions.service';

@Injectable({
  providedIn: 'root'
})
export class ApproveTransportationGuard implements CanActivate {
  dept = JSON.parse(`${localStorage.getItem("XXX")}`).XXX;
  hrCode = JSON.parse(`${localStorage.getItem("XXX")}`).XXX;

  constructor(public router:Router,private permissionService:PermissionsService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this.permissionService.allPermissionsCodeList.find((o:any)=>o === this.hrCode) || this.permissionService.approveTransportationCodeList.find((o:any)=>o===this.hrCode)){
          return true
        }else{
        this.router.navigate(['/notFound']);
          return false
        }
  }

}
