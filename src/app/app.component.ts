import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoggerService } from "./logger.service";
import { ExperimentalLoggerService } from "./experimental-logger.service";
//import { LegacyLogger } from "./logger.legacy";
import { APP_CONFIG, AppConfig } from "./config.token";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [
    {
      provide: LoggerService,
      //useValue: LegacyLogger,
      useFactory: (config: AppConfig, http: HttpClient) => {
        return config.experimentalEnabled === true
          ? new ExperimentalLoggerService(http)
          : new LoggerService();
      },
      deps: [APP_CONFIG, HttpClient]
    }
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private logger: LoggerService,
    private experimentalLogger: ExperimentalLoggerService
  ) {}

  ngOnInit() {
    this.logger.prefix = "App Component";
    this.logger.log("AppComponent init...");

    console.log(
      "is the same instance: ",
      this.logger === this.experimentalLogger
    );
  }

  title = "Angular CLI Template";
}
