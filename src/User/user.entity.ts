import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'users'})
export class UserEntity{

    @PrimaryGeneratedColumn('uuid')
    id:number

    @Column({name:'nome'})
    nome:string
    
    @Column({name:'setor'})
    setor:string

    @CreateDateColumn({name:'created_at'})
    createdAt:string

    @UpdateDateColumn({name:'updated_at'})
    updateAt:string
    
    @DeleteDateColumn({name:'deleted_at'})
    deletedAt:string


}