import { IsArray, IsDate, IsEnum, IsJSON, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { periodoChecklist } from "../enum/checklist.enum";
import { ItemChecklistEntity } from "../ItemChecklist/item.checklist.entity";

export class CriaChecklistDTO{
       

    @IsString()
    @IsNotEmpty()
    descricao:string

    @IsString()
    setor:string

    @IsString()
    userId:string

    @IsString()
    periodo:string
    
    @IsArray()
    itens:ItemChecklistEntity[]
    
    @IsString()
    autor:string
}