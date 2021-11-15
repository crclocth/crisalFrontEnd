import { Company } from './company.modal';
import { Examinee } from './examinee.model';
import { Physiological } from './physiological.model';
import { Results } from './results.model';

export interface Certificate {
  title: string;
  _id?: string;
  date: Date;
  examinee: Examinee;
  company: Company;
  physiological: Physiological;
  generalResults?: Results[];
  labResults?: Results[];
  conclusion: string;
  suggestions: string;
  validity: string;
  validityDate: string;
  doctor: string;
  createdAt?: Date;
  updatedAt?: Date;
}
