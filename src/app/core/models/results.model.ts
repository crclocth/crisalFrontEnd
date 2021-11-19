export interface Results {
  _id?: string;
  exam: string;
  laboratory?: string;
  measurementUnit?: string;
  status: string;
  remark: string;
  result?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
