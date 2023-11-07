import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { criaUserDTO } from "./dto/criaUser.dto";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepo:Repository<UserEntity>,

        ){}

    async criaUser(u:criaUserDTO){

    }
}