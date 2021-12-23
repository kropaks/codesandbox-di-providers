import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { ILogger } from "./logger.interface";
import { APP_CONFIG, AppConfig } from "./config.token";

@Injectable({
  providedIn: "root"
})
export class ExperimentalLoggerService implements ILogger {
  prefix = "experimental";

  //constructor(@Inject(APP_CONFIG) private config: AppConfig) {
  constructor(http: HttpClient) {
    //console.log(`ExperimentalLoggerService - constructor - config`, config);
  }

  log(message: string) {
    console.log(`prefix: ${this.prefix}, (experimental) message: ${message}`);
  }
}
