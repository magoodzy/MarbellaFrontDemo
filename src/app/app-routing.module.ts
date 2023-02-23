import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Core/guards/auth/auth.guard';
import { LoginGuard } from './Core/guards/login/login.guard';
import { NotFoundComponent } from './Shared/components/not-found/not-found.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
  path: 'public',
  loadChildren: () => import('./Modules/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./Modules/Authentication/authentication.module').then((m) => m.AuthenticationModule),
    canActivate:[LoginGuard]

  },

  {
    path: 'home',
    loadChildren: () => import('./Modules/Dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'HR',
    loadChildren: () => import('./Modules/hr/hr.module').then((m) => m.HrModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'IT',
    loadChildren: () => import('./Modules/it/it.module').then((m) => m.ITModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'HSE',
    loadChildren: () => import('./Modules/hse/hse.module').then((m) => m.HSEModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'R&D',
    loadChildren: () => import('./Modules/rnd/rnd.module').then((m) => m.RNDModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'QA',
    loadChildren: () => import('./Modules/qa/qa.module').then((m) => m.QAModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'profile',
    loadChildren: () => import('./Modules/profile/profile.module').then((m) => m.ProfileModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'security',
    loadChildren: () => import('./Modules/Security/securtiy.module').then((m) => m.SecurtiyModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'finance',
    loadChildren: () => import('./Modules/finance/finance.module').then((m) => m.FinanceModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'notFound',
    component:NotFoundComponent,
    canActivate:[AuthGuard]

  }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
