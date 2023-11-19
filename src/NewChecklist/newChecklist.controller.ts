import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { NewChecklistService } from "./newChecklist.service";
import { CriaNewChecklistDTO } from "./dto/criaChecklist.dto";

@Controller('newChecklist')
export class NewChecklistController{

    constructor(
        private checklistService:NewChecklistService,
        ){}
    
    @Post()
    async criaChecklist(@Body() payload:CriaNewChecklistDTO){
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