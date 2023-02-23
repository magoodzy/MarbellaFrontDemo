export class GetAllMaterialsResponse
{
    name:string='';
    price: Number=0;
    unit: string='';
    createdBy: string='';
    createdAt:Date= new Date();
    updatedBy: string|null='';
    updatedAt:Date= new Date();
    id: Number=0
}