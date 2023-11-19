import { Type } from "class-transformer"
import { IsArray, IsString, ValidateNested } from "class-validator"
import { criaChecklistImagemDTO } from "./checklistImage.dto"
import { NewChecklistEntity } from "../newChecklist.entity"
import { ImageEntity } from "../image.entity"

export class  criaChecklistItemDTO {

  id:string

  @IsString()
  nome: string

  @IsString()
  descricao: string
   
  @ValidateNested()
  @IsArray()
  @Type(() => criaChecklistImagemDTO)
  imagens: ImageEntity[]
   

  newChecklist:NewChecklistEntity

}