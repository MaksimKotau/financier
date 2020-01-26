import OperationType from "../enums/OperationType";

export default interface OperationDTO {
  id: number;
  name: string;
  comment: string;
  value: number;
  date: string;
  type: OperationType;
  operationCategoryID: number;
}