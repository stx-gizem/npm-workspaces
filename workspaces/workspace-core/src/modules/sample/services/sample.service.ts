import { Injectable } from "@nestjs/common";

@Injectable()
export class SampleService {
  func() {
    return `Hello world`;
  }
}
