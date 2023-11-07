import { Body, Controller, Post } from "@nestjs/common";
import { criaUserDTO } from "./dto/criaUser.dto";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private userService:UserService){}
    @Post()
    async criaUser(@Body() payload:criaUserDTO){
        const user = this.userService.criaUser(payload)        
        return user
    }
}