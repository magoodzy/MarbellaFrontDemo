import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpService } from './http/http.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClient,
    HttpClientModule,
    RouterModule,
  ],
  providers:[
    {
      provide: HttpClient,
      useClass: HttpService,
    },
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
 }
