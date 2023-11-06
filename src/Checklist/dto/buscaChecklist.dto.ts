import {  periodoChecklist } from "../enum/checklist.enum";
//import { Item } from "../enum/item.entity";

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