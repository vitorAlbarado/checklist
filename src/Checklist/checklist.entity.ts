import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import {  periodoChecklist } from "./enum/checklist.enum"

class Item {
    item:string
    descricao:string
}
@Entity({name:'checklists'})
export class ChecklistEntity{

    @PrimaryGeneratedColumn('uuid')
    id:number

    @Column({name:'descricao'})
    descricao:string

    @Column({name:'setor',length:30, nullable:false})
    setor:string

    @Column({name:'periodo', nullable:false})
    periodo:periodoChecklist
    
    
    /**
     * 
     @Column({name:'user_id',nullable:false})
     userId:string
     * @Column({name:'autor',nullable:false})
    autor:string
     */

    
   /**
    * 
    *  @OneToMany(type => Item, item => item.)
    itens:Item[]
    */
     

    @CreateDateColumn({name:'created_at'})
    createdAt:string

    @UpdateDateColumn({name:'updated_at'})
    updateAt:string
    
    @DeleteDateColumn({name:'deleted_at'})
    deletedAt:string
} 