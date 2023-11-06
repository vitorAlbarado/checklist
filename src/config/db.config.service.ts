import { Injectable } from "@nestjs/common";
import { TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist";

@Injectable()
export class DbConfigService implements TypeOrmOptionsFactory{
    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions{
        return{
            type:'mssql',
            host:'MANBRLT120',
            port:1433,
            username:'user_checklist',
            password:'root',
            database:'db_checklist',
            entities:[__dirname + '/../**/*.entity.{js,ts}'],
            synchronize:false,
            options: { encrypt: false },
        }
    }
}