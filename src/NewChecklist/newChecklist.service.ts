import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { NewChecklistRepository } from './newChecklist.repository'
import { NewChecklistEntity } from './newChecklist.entity'
import { CriaNewChecklistDTO } from './dto/criaChecklist.dto'
import { ItemEntity } from './item.entity'

@Injectable()
export class NewChecklistService{
    constructor(
        @InjectRepository(NewChecklistEntity)
        private readonly checklistRepo:Repository<NewChecklistEntity>
        ){}
        
        async criaChecklist(c: CriaNewChecklistDTO) {
            const obj = new NewChecklistEntity()
            obj.descricao = c.descricao
            obj.setor = c.setor
            obj.periodo = c.periodo
            obj.userId = c.userId
            obj.itens = c.itens
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