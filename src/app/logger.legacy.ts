import { ILogger } from "./logger.interface";

export const LegacyLogger: ILogger = {
  prefix: "legacy root",
  log(message: string): void {
    console.log(`prefix: ${this.prefix}, (legacy) message: ${message}`);
  }
};
