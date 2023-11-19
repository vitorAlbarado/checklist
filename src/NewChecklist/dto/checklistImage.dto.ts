import { IsString } from "class-validator"
import { ItemEntity } from "../item.entity"

export class criaChecklistImagemDTO{
    id:String

    @IsString()
    titulo:string
    
    @IsString()
    url:string
    
    item:ItemEntity
}