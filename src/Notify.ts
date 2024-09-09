import { User } from "./User";

export class Notify {
  constructor(private user: User) {}

  sendMail(): void {
    console.log("email was sent to", this.user.getName());
  }

  sendSMS(): void {
    console.log("sent sms");
  }
}
