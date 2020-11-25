import { Role } from "app/enums/Role.enum";

export class ConnectedUser {
  identifiant: string;
  motDePasse: string;
  role: Role;
}
