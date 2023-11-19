import { Module } from '@nestjs/common';
import { ChecklistModule } from './Checklist/checklist.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { DbConfigService } from './config/db.config.service';
import { UserModule } from './User/user.module';
import { NewChecklistModule } from './NewChecklist/newChecklist.module';

@Module({
  imports: [ChecklistModule,UserModule,NewChecklistModule,TypeOrmModule.forRootAsync({
    useClass:DbConfigService,
    inject:[DbConfigService]
  })]
})
export class AppModule {}
