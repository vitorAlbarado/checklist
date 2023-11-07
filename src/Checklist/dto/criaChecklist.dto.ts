import { IsArray, IsDate, IsEnum, IsJSON, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { periodoChecklist } from "../enum/checklist.enum";

export class CriaChecklistDTO{
    

    @IsString()
    @IsNotEmpty()
    descricao:string

    @IsString()
    setor:string

    @IsString()
    userId:string

    @IsString()
    //@IsEnum(periodoChecklist)
    periodo:string
    @IsArray()
    itens:[{
        id:number
        item:string,
        descricao:string
    }]
    
    @IsString()
    autor:string
}