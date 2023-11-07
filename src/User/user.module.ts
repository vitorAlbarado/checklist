import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";
import { UserService } from "./user.service";

@Module({
    imports:[TypeOrmModule.forFeature([UserEntity])],
    controllers:[UserController],
    providers:[UserRepository,UserService]
})
export class UserModule{

}