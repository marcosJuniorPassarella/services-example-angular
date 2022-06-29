import { Component, OnInit } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AccountService } from "../account.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  //providers: [LoggingService],
})
export class NewAccountComponent implements OnInit {
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.accountService.statusUpdated.subscribe({
      next: (res: string) => alert("teste" + res),
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
