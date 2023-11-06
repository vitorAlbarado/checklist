import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity('checklist_item')
export class Item {

  @PrimaryGeneratedColumn('uuid')
    id:number
    
  @Column({name:'nome',length:100,nullable:false})  
  nome:string
  
  @Column({name:'descricao',length:255,nullable:false})  
  descricao:string  
}
 