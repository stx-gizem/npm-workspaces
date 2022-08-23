import { Injectable } from '@nestjs/common';
import { SampleService } from "@stx/core/dist/src/modules";

@Injectable()
export class AppService {
  constructor(
    private sampleService: SampleService,
  ) {
  }

  async getHello() {
    return `${this.sampleService.func()}}`;
  }
}
