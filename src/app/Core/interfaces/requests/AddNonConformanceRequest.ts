export class AddNonConformanceRequest
{
        companyId: Number=1;
        typesOfNonConformanceId: Number=0;
        date: Date=new Date();
        supplier: string='';
        variant: string='';
        prodDate: Date=new Date();
        quantity: Number=0;
        itemCode: string='';
        poNumber: string='';
        nonConformanceDescId: Number=0;
        descStatusId: Number=0;
        otherNotes: string='';
        rootCauseOfNoConformance: string='';
        createdBy: string=''
}