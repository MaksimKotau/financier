export default interface TransactionDTO {
  id: string;
  name?: string;
  description?: string;
  value: number;
  date: string;
  transactionCategoryID: string;
  accountID: string;
  pairTransactionID?: string;
}