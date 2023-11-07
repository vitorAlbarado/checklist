import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import { CriaChecklistDTO } from './dto/criaChecklist.dto'
import { ChecklistRepository } from './checklist.repository'
import {Repository} from 'typeorm'
import { ChecklistEntity } from './checklist.entity'
import { BuscaChecklistDTO } from './dto/buscaChecklist.dto'

@Injectable()
export class ChecklistService{
    constructor(
        @InjectRepository(ChecklistEntity)
        private readonly checklistRepo:Repository<ChecklistEntity>
        ){}
        
        async criaChecklist(c: CriaChecklistDTO) {
            const obj = new ChecklistEntity()
            obj.descricao = c.descricao
            obj.setor = c.setor
            obj.periodo = c.periodo
            obj.userId = c.userId
            const checklist = await this.checklistRepo.save(obj)
            return checklist
        }

        async listaChecklists() {
            const checklists = await this.checklistRepo.find()
            /**
             * const cheklist = checklists.map(e =>{
                new BuscaChecklistDTO(e.id,e.descricao,e.setor,e.periodo,e.createdAt,e.autor)
            })
             */
             
            return checklists
        }

}