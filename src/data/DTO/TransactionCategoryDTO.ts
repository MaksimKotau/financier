import TransactionType from "../enums/TransactionType";

export default interface TransactionCategoryDTO {
  id: string;
  name: string;
  description?: string;
  type: TransactionType;
}