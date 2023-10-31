import { Module } from "@nestjs/common";
import { ChecklistController } from "./checklist.controller";
import { ChecklistRepository } from "./checklist.repository";

@Module({
    controllers:[ChecklistController],
    providers:[ChecklistRepository]
})
export class ChecklistModule{

}