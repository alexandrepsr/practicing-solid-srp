import { Notify } from "./Notify";
import { User } from "./User";

const user = new User("Usuario");
const notify = new Notify(user);
notify.sendMail();