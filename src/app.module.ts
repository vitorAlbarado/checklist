import { Module } from '@nestjs/common';
import { ChecklistModule } from './Checklist/checklist.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { DbConfigService } from './config/db.config.service';
import { UserModule } from './User/user.module';

@Module({
  imports: [ChecklistModule,UserModule,TypeOrmModule.forRootAsync({
    useClass:DbConfigService,
    inject:[DbConfigService]
  })]
})
export class AppModule {}
