import { ConnectedUser } from "./connectedUser";

export class ConnexionDto {
  user: ConnectedUser;
  token: string;
  error: boolean;
}
