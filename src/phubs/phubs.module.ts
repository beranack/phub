import { Module } from '@nestjs/common';
import { PhubsController } from './phubs.controller';
import { PhubsService } from './phubs.service';

@Module({
  controllers: [PhubsController],
  providers: [PhubsService]
})
export class PhubsModule {}
