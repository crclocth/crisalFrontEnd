export interface Battery {
  _id?: string;
  name: string;
  description: string;
  generalExams: string[];
  labExams: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
