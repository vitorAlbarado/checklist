import { ArrayMinSize, IsArray, IsBoolean, IsDate, IsEnum, IsJSON, IsNotEmpty, IsPositive, IsString, ValidateNested } from "class-validator";
import { ItemEntity } from "../item.entity";
import { criaChecklistItemDTO } from "./checklistItem.dto";
import { type } from "os";
import { Type } from "class-transformer";
import { criaChecklistImagemDTO } from "./checklistImage.dto";

export class CriaNewChecklistDTO{
    

    @IsString()
    @IsNotEmpty()
    descricao:string

    @IsString()
    setor:string

    @IsString()
    userId:string

    @IsString()
    periodo:string

    @IsString()
    autor:string

    @IsArray()
    @ArrayMinSize(1)
    itens:ItemEntity[]

}