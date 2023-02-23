import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QARoutingModule } from './qa-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TableModule } from 'primeng/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CalendarModule } from 'primeng/calendar';
import { HSEGuard } from 'src/app/Core/guards/HSEPermission/hse.guard';
import { QAGuard } from 'src/app/Core/guards/QAPermission/qa.guard';
import { DeveloperPermissionGuard } from 'src/app/Core/guards/developer/developer-permission.guard';

@NgModule({
  declarations: [
    ...QARoutingModule.components,
  ],
  imports: [
    CommonModule,
    QARoutingModule,
    SharedModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    TableModule,
    MatPaginatorModule,
    CalendarModule
  ],
  providers:[QAGuard,DeveloperPermissionGuard]
})
export class QAModule { }
