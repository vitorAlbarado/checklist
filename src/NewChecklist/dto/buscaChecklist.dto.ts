//import { Item } from "../enum/item.entity";

import { periodoChecklist } from "src/Checklist/enum/checklist.enum";

export class BuscaChecklistDTO{
    constructor(
        id:number,
        descricao:string,
        setor:string,
        periodo:periodoChecklist,
        //itens:Item[],
        createdAt:string,
        autor:string
        ){}
    
}