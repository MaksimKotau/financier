import { Moment } from 'moment'

export default interface TransactionDTO {
  id: string;
  name?: string;
  description?: string;
  value: number;
  date: Moment;
  transactionCategoryID: string;
}