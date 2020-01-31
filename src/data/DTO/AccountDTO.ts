import AccountType from "../enums/AccountType";

export default interface AccountDTO {
  id: string;
  name: string;
  type: AccountType;
}