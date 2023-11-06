import { IsArray, IsDate, IsEnum, IsJSON, IsNotEmpty, IsPositive, IsString } from "class-validator";
import { periodoChecklist } from "../enum/checklist.enum";

export class CriaChecklistDTO{
    

    @IsString()
    @IsNotEmpty()
    descricao:string

    @IsString()
    setor:string

    @IsString()
    @IsEnum(periodoChecklist)
    periodo:periodoChecklist

    @IsArray()
    itens:[{
        id:number
        item:string,
        descricao:string
    }]
    @IsString()
    createdAt:Date
    @IsString()
    autor:string
}