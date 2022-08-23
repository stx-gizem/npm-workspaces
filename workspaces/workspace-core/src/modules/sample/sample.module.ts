import { Module } from "@nestjs/common";
import { SampleService } from "./services/sample.service";

@Module({
  imports: [],
  providers: [
    SampleService
  ],
  exports: [
    SampleService
  ]
})
export class SampleModule {
  public static forRoot() {

  }
}
