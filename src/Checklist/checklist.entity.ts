import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import {  periodoChecklist } from "./enum/checklist.enum"
import {  ItemChecklistEntity } from "./ItemChecklist/item.checklist.entity"


@Entity({name:'checklists'})
export class ChecklistEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({name:'descricao'})
    descricao:string

    @Column({name:'setor',length:30, nullable:false})
    setor:string

    @Column({name:'periodo', nullable:false,enum:periodoChecklist})
    periodo:string
    
    @Column({name:'user_id',nullable:false})
     userId:string

    @OneToMany(()=>ItemChecklistEntity, itemChecklistEntity => 
    itemChecklistEntity.checklistId, {cascade:true, eager:true})
    itens:ItemChecklistEntity[]
    
    @CreateDateColumn({name:'created_at'})
    createdAt:Date

    @UpdateDateColumn({name:'updated_at'})
    updateAt:Date
    
    @DeleteDateColumn({name:'deleted_at'})
    deletedAt:Date
} 