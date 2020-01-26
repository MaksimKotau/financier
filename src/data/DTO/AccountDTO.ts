import AccountType from "../enums/AccountType";

export default interface AccountDTO {
  id: number;
  name: string;
  type: AccountType;
}