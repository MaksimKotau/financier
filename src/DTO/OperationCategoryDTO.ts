import OperationType from "../enums/OperationType";

export default interface OperationCategoryDTO {
  id: number;
  name: string;
  description: string;
  type: OperationType;
}