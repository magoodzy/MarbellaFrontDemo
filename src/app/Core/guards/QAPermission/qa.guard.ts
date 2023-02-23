import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionsService } from 'src/app/Shared/services/permissions/permissions.service';

@Injectable({
  providedIn: 'root'
})
export class QAGuard implements CanActivate {
  dept = JSON.parse(`${localStorage.getItem("xxx")}`).xxx;
  hrCode = JSON.parse(`${localStorage.getItem("xxx")}`).xxx;
  constructor(private router:Router,private permissionService:PermissionsService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if((this.permissionService.allPermissionsCodeList.find((o:any)=>o == this.hrCode) || this.dept.includes("QA") || this.permissionService.getQAPermissionCodeList.find((o:any)=>o == this.hrCode))){
        return true;
      } else {
        this.router.navigate(['/notFound']);
        return false
      }
  }

}
