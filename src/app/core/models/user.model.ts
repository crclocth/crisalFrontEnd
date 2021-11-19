export interface User {
  _id?: string;
  name: string;
  mail: string;
  password: string;
  role?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
