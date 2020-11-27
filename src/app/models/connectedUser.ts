import { Role } from "app/enums/Role.enum";

export class ConnectedUser {
  identifiant: string;
  mdp: string;
  role: Role;
  token: string;
}
