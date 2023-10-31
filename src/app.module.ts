import { Module } from '@nestjs/common';
import { ChecklistModule } from './Checklist/checklist.module';

@Module({
  imports: [ChecklistModule]
})
export class AppModule {}
