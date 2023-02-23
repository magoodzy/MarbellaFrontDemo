import { moraleUsersToPointsRequest } from "./moraleUsersToPointsRequest";

export class SubmitMoraleRequest
{
  moraleUsersToPoints:moraleUsersToPointsRequest[] |any=[];
  notes:string='';
  isAnonymous:boolean=false;
}
