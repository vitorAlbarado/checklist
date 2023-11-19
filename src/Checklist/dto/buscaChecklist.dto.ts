import { ItemEntity } from "src/NewChecklist/item.entity";
import { BuscaItemDTO } from "./buscaItem.dto";
import { IsArray, IsDate, IsString } from "class-validator";

export class BuscaChecklistDTO {
    
    @IsString()
    descricao: string

    @IsString()
    setor: string
    
    @IsString()
    periodo: string
    
    @IsArray()
    itens: BuscaItemDTO[]

    @IsDate()
    createdAt: Date
    

}