import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QAGuard } from 'src/app/Core/guards/QAPermission/qa.guard';
import { QAWorkPermissionComponent } from './components/qawork-permission/qawork-permission.component';
import { NonConformanceMaterialComponent } from './components/non-conformance-material/non-conformance-material.component';
import { AddNonConformanceComponent } from './components/add-non-conformance/add-non-conformance.component';
import { DeveloperPermissionGuard } from 'src/app/Core/guards/developer/developer-permission.guard';

const routes: Routes = [
  {
    path:'WorkPermissionHistory',
    component:QAWorkPermissionComponent,
    canActivate:[QAGuard]
  },
  {
    path:'NonConformanceMaterial',
    component:NonConformanceMaterialComponent,
    canActivate:[QAGuard]
  },
  {
    path:'AddNonConformance',
    component:AddNonConformanceComponent,
    canActivate:[DeveloperPermissionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QARoutingModule {
  static components = [ QAWorkPermissionComponent, NonConformanceMaterialComponent,AddNonConformanceComponent];
}
