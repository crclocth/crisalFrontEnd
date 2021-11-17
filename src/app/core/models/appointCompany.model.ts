import { Appointment } from './appointment.model';

export interface AppointCompany {
  _id?: string;
  name: string;
  rut: string;
  faena: string;
  email: string;
  date: Date;
  examinees: Appointment[];
  createdAt?: Date;
  updatedAt?: Date;
}
