import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CriaChecklistDTO } from './dto/criaChecklist.dto'
import { Repository } from 'typeorm'
import { ChecklistEntity } from './checklist.entity'
import { BuscaChecklistDTO } from './dto/buscaChecklist.dto'
import { BuscaItemDTO } from './dto/buscaItem.dto'

@Injectable()
export class ChecklistService {
    constructor(
        @InjectRepository(ChecklistEntity)
        private readonly checklistRepo: Repository<ChecklistEntity>
    ) { }

    async criaChecklist(c: CriaChecklistDTO) {
        const obj = new ChecklistEntity()
        obj.descricao = c.descricao
        obj.setor = c.setor
        obj.periodo = c.periodo
        obj.userId = c.userId
        obj.itens = c.itens;
        const checklist = await this.checklistRepo.save(obj)
        return checklist
    }

    async listaChecklists() {
        const checklists = await this.checklistRepo.find()

        const listChecklists = checklists.map(e => {
            var itens: BuscaItemDTO[] = [];
            itens = e.itens.map(e => {
                const obj = new BuscaItemDTO()
                obj.descricao = e.descricao
                obj.nome = e.nome
                return obj
            });
            const obj = new BuscaChecklistDTO()
            obj.descricao = e.descricao
            obj.setor = e.setor
            obj.periodo = e.periodo
            obj.itens = itens
            obj.createdAt = e.createdAt
           return obj
        })
        return listChecklists
    }

}