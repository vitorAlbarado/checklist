import { Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ChecklistRepository } from "./checklist.repository";

@Controller('checklist')
export class ChecklistController{

    constructor(private checklistRepo:ChecklistRepository){}
    @Post()
    async criaChecklist(){

    }
    @Get()
    async buscaChecklist(){

    }
    @Get('/:id')
    async filtraChecklist(@Param('id') id:string){

    }
    @Put('/:id')
    async editaChecklist(@Param('id') id:string){

    }
}