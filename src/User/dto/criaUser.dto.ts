import { IsNotEmpty, IsPositive, IsString } from "class-validator"

export class criaUserDTO{
    
    @IsPositive({message:'Matricula invalida'})
    @IsNotEmpty({message:'Matricula vazia'})
    matricula:number

    @IsString({message:'nome invalido'})
    nome:string
    
    @IsString()
    setor:string

}