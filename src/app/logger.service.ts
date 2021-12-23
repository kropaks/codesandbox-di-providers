import { Injectable } from "@angular/core";
import { ILogger } from "./logger.interface";

@Injectable({
  providedIn: "root"
})
export class LoggerService implements ILogger {
  prefix = "default";

  constructor() {}

  log(message: string) {
    console.log(`prefix: ${this.prefix}, message: ${message}`);
  }
}
