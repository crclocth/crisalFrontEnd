import { Company } from './company.modal';

export interface Certificate {
  _id?: string;
  date: Date;
  examinee: Examinee;
  company: Company;
  physiological: Physiological;
  generalResults: Results[];
  labResults: Results[];
  conclusion: string;
  suggestions: string;
  validity: string;
  validityDate: string;
  doctor: string;
  createdAt?: Date;
  updatedAt?: Date;
}
