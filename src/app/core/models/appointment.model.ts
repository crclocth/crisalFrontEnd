export interface Appointment {
  _id?: string;
  name: string;
  rut: string;
  email?: string;
  battery: string;
  date?: Date;
  age: number;
  isConfirmed: boolean;
  jobTitle?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
