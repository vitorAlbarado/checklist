import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { ItemEntity } from "./item.entity"

@Entity({name:'checklist_image'})
export class ImageEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string
     
    @Column({name:'titulo',length:255,nullable:true})
    titulo:string

    @Column({name:'url',length:255,nullable:true})
    url:string

    @ManyToOne(()=>ItemEntity, itemEntity => itemEntity.imagens,{onDelete:'CASCADE', onUpdate:'CASCADE'})
    item:ItemEntity
    

}