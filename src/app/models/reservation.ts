import { HeureRdv } from "../enums/heure-rdv";
export class Reservation {
  idReservation: number;
  status: boolean;
  dateReservation: Date;
  isUrgent: boolean;
  heureRdv: HeureRdv;
}
