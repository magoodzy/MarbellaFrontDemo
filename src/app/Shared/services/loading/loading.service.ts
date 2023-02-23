import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = new Subject<boolean>();

  show() {
      this.isLoading.next(true);
  }

  hide() {
      this.isLoading.next(false);
  }

   wscols =[{wch:6},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
    {wch:20},
  ]
  standardWorkHours:number=8;

  constructor() { }

  scrollTop(){
    window.scrollTo(0,0);
  }

  exportExcel(name:string){
    const fileName = `${name}.xls`
      /* pass here the table id */

    var myTable = document.getElementById('table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(myTable);
      ws['!cols']=this.wscols;
      /* generate workbook and add the worksheet */
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      /* save to file */
      XLSX.writeFile(wb, fileName);
  }

  exportJson(data:any,fileName:string){
    /* pass here the table id */
    // var myTable = document.getElementById('table');
    const ws: XLSX.WorkSheet =XLSX.utils.json_to_sheet(data);
    ws['!cols']=this.wscols;

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, fileName);
  }
}
