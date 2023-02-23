export class GenericResponse<T>
{
    Status:string='';
    Message:string='';
    Data:T | undefined;
}