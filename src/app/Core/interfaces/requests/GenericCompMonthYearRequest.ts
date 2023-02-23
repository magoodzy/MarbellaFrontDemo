import * as moment from "moment";

export class GenericCompMonthYearRequest
{
  companyId:number=0;
  Year:number=moment().year();
  Month:number=moment().month()+1
}
