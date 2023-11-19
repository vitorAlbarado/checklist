import {  ItemEntity } from "./item.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { periodoChecklist } from "src/Checklist/enum/checklist.enum";

@Entity({name:'closed_checklist'})
export class NewChecklistEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column({name:'descricao'})
    descricao:string

    @Column({name:'setor',length:30, nullable:false})
    setor:string

    @Column({name:'periodo', nullable:false,enum:periodoChecklist})
    periodo:string
    
    @Column({name:'user_id',nullable:false})
    userId:string

    @CreateDateColumn({name:'created_at'})
    createdAt:Date

    @UpdateDateColumn({name:'updated_at'})
    updateAt:Date
    
    @DeleteDateColumn({name:'deleted_at'})
    deletedAt:Date
    
    @OneToMany(()=>ItemEntity, itemEntity => 
    itemEntity.newChecklist, {cascade:true, eager:true})
    itens:ItemEntity[]
}