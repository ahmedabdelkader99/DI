import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}
  compute() {
    console.log('Hey This is CpuService');
    this.powerService.supplyPower();
  }
}
