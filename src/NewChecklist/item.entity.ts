import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm"
import { ImageEntity } from "./image.entity"
import { NewChecklistEntity } from "./newChecklist.entity"

@Entity('closed_item')
export class ItemEntity {

  @PrimaryGeneratedColumn()
  id:number
    
  @Column({name:'nome',length:100,nullable:false})  
  nome:string
  
  @Column({name:'descricao',length:255,nullable:false})  
  descricao:string

  @Column({name:'obs',length:255,nullable:true})  
  obs:string
  
  @Column({name:'status',nullable:false})
  status: boolean

 
  @OneToMany(()=>ImageEntity, imageEntity => imageEntity.item,{cascade:true, eager:true})
  imagens:ImageEntity[]
  
  @JoinColumn({name:"closed_checklist_id"})
  @ManyToOne(()=>NewChecklistEntity,(newChecklist)=> newChecklist.itens,{onDelete:'CASCADE',onUpdate:'CASCADE'})
  newChecklist:NewChecklistEntity
}
 