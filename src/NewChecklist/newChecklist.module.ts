import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm'
import { NewChecklistEntity } from "./newChecklist.entity";
import { NewChecklistController } from "./newChecklist.controller";
import { NewChecklistRepository } from "./newChecklist.repository";
import { NewChecklistService } from "./newChecklist.service";

@Module({
    imports:[TypeOrmModule.forFeature([NewChecklistEntity])],
    controllers:[NewChecklistController],
    providers:[NewChecklistRepository,NewChecklistService]
})
export class NewChecklistModule{

}