import * as moment from "moment";


export class GetMoraleRequest
{
  companyId:number=0;
  Year:number=moment().year();
  Month:number=moment().month()+1;
  SubCode:string=''
}
