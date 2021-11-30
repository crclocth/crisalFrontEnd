export interface News {
  _id?: string;
  title: string;
  lead: string;
  content: string;
  image: string;
  visible: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
