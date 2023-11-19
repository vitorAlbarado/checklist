import { NewChecklistEntity } from "src/NewChecklist/newChecklist.entity"
import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, JoinColumn } from "typeorm"
import { ChecklistEntity } from "../checklist.entity"

@Entity({name:'item_checklist'})
export class ItemChecklistEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string
      
    @Column({name:'nome',length:100,nullable:false})  
    nome:string
    
    @Column({name:'descricao',length:255,nullable:false})  
    descricao:string  

    @JoinColumn({name:"checklist_id"})
    @ManyToOne(()=>ChecklistEntity,(checklistEntity)=> checklistEntity.itens,{ onDelete:'CASCADE',onUpdate:'CASCADE'})
    checklistId:ChecklistEntity
}