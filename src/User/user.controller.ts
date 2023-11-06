import { Body, Controller, Post } from "@nestjs/common";
import { criaUserDTO } from "./dto/criaUser.dto";
import { UserRepository } from "./user.repository";

@Controller('user')
export class UserController{
    constructor(private userRepo:UserRepository){}
    @Post()
    async criaUser(@Body() payload:criaUserDTO){
        const user = payload
        return user
    }
}