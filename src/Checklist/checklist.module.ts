import { Module } from "@nestjs/common";
import { ChecklistController } from "./checklist.controller";
import { ChecklistRepository } from "./checklist.repository";
import {TypeOrmModule} from '@nestjs/typeorm'
import {ChecklistService} from './checklist.service'
import { ChecklistEntity } from "./checklist.entity";

@Module({
    imports:[TypeOrmModule.forFeature([ChecklistEntity])],
    controllers:[ChecklistController],
    providers:[ChecklistRepository,ChecklistService]
})
export class ChecklistModule{

}