import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TicketSystemComponent } from './components/ticket-system/ticket-system.component';
import { AddGenericManagersComponent } from './components/add-generic-managers/add-generic-managers.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TableModule } from 'primeng/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CalendarModule } from 'primeng/calendar';
import { GenericAdminSituationComponent } from './components/generic-admin-situation/generic-admin-situation.component';
import { SavedAdminSituationComponent } from './components/saved-admin-situation/saved-admin-situation.component';
import { EditAdminSituationComponent } from './components/saved-admin-situation/edit-admin-situation/edit-admin-situation.component';
import { WorkPermissionHistoryComponent } from './components/work-permission-history/work-permission-history.component';
import { WorkPermDetailsComponent } from './components/work-permission-history/work-perm-details/work-perm-details.component';
import { WorkPermRequirementsComponent } from './components/work-permission-history/work-perm-requirements/work-perm-requirements.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRejWorkPermissionComponent } from './components/work-permission-history/app-rej-work-permission/app-rej-work-permission.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    TicketSystemComponent,
    AddGenericManagersComponent,
    GenericAdminSituationComponent,
    SavedAdminSituationComponent,
    EditAdminSituationComponent,
    WorkPermissionHistoryComponent,
    WorkPermDetailsComponent,
    WorkPermRequirementsComponent,
    AppRejWorkPermissionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    TableModule,
    MatPaginatorModule,
    CalendarModule,
    MatDialogModule


  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    FormsModule,
    TicketSystemComponent,
    AddGenericManagersComponent,
    GenericAdminSituationComponent,
    SavedAdminSituationComponent,
    EditAdminSituationComponent,
    WorkPermissionHistoryComponent,
    WorkPermDetailsComponent,
    WorkPermRequirementsComponent,
  ]
})
export class SharedModule { }
