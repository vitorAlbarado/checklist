import { IsString } from "class-validator";
import { ItemChecklistEntity } from "../ItemChecklist/item.checklist.entity";

export class BuscaItemDTO {
    @IsString()
    nome: string
    @IsString()
    descricao: string

}