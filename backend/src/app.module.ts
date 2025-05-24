import { Module } from '@nestjs/common';
import { SystemModule } from './systemStatus/system.module';

@Module({
  imports: [SystemModule],
})
export class AppModule {}
