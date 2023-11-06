import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ChecklistRepository } from "./checklist.repository";
import { CriaChecklistDTO } from "./dto/criaChecklist.dto";
import { ChecklistService } from "./checklist.service";

@Controller('checklist')
export class ChecklistController{

    constructor(
        private checklistService:ChecklistService,
        private checklistRepo:ChecklistRepository
        ){}
    
    @Post()
    async criaChecklist(@Body() payload:CriaChecklistDTO){
        const checklist = payload
        return this.checklistService.criaChecklist(checklist)
    }
    @Get()
    async buscaChecklist(){
       return this.checklistService.listaChecklists()
    }
    @Get('/:id')
    async filtraChecklist(@Param('id') id:string){

    }
    @Put('/:id')
    async editaChecklist(@Param('id') id:string){

    }
}