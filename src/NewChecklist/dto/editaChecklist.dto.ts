import { IsArray, IsDate, IsEnum, IsJSON, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { periodoChecklist } from "src/Checklist/enum/checklist.enum";

export class EditaChecklistDTO{
    
    @IsString()
    @IsNotEmpty()
    descricao:string

    @IsString()
    setor:string

    @IsString()
    @IsEnum(periodoChecklist)
    periodo:string

    @IsArray()
    itens:[{
        id:number
        item:string,
        descricao:string
    }]
    
}