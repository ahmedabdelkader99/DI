import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  //to make it public to another modules
  exports: [PowerService],
})
export class PowerModule {}
