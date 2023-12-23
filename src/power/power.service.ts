import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower() {
    console.log('HeY thi is Power Service');
  }
}
