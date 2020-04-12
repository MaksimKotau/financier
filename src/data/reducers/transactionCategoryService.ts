import { TransactionCategoryState } from "./transactionCategoryReducers";
import TransactionType from "../enums/TransactionType";

export const getCategories = (): TransactionCategoryState => [
    {
        id: "42f9a5d2-3fec-4ed3-878c-93095460e88e",
        name: "Expenses",
        type: TransactionType.TransitExpenses,
    },
    {
        id: "c673832a-44bd-4442-b29b-ebdf42645658",
        name: "Inome",
        type: TransactionType.TransitIncome,
    },
    {
        id: "f2a77222-5d6f-48e7-aed3-b51ffd09e982",
        name: "Food & Drinks",
        type: TransactionType.Expenses
    },
    {
        id: "95e93f81-11c7-4b3e-92c4-b1960c78fe54",
        name: "Transport",
        type: TransactionType.Expenses
    },
    {
        id: "23258782-fe5c-4c50-a12c-8e2807b5393c",
        name: "Medicines",
        type: TransactionType.Expenses
    },
    {
        id: "b1fc595f-8e8c-48c6-8145-e4ec19cc3e25",
        name: "Cosmetics & Personal care",
        type: TransactionType.Expenses
    },
    {
        id: "7d5d6991-81fe-4807-9e68-f09377a0bb7f",
        name: "Education",
        type: TransactionType.Expenses
    },
    {
        id: "db2735ca-b9cd-4fa2-b007-ffbefc0ee04c",
        name: "Clothing & Footwear",
        type: TransactionType.Expenses
    },
    {
        id: "1da94395-d6ef-46ba-b552-abb642803d38",
        name: "Gifts",
        type: TransactionType.Expenses
    },
    {
        id: "946f601c-78fb-4ac8-9f7b-55b9489a93e2",
        name: "Leisure",
        type: TransactionType.Expenses
    },
    {
        id: "07151ffb-f5ec-499d-a4ed-f276408bddb8",
        name: "Loans",
        type: TransactionType.Expenses
    },
    {
        id: "2eff0a62-be18-4538-98d9-2c3a97247a56",
        name: "Other",
        type: TransactionType.Expenses,
    },
    {
        id: "963fb051-b5a2-447f-a531-56323a93ae4f",
        name: "Salary",
        type: TransactionType.Income
    },
    {
        id: "102876a5-742b-4e24-b5cc-82ecea494bce",
        name: "Child assistance payments",
        type: TransactionType.Income
    },
    {
        id: "c6a35319-8566-446a-b634-212ec392ce46",
        name: "Dividends",
        type: TransactionType.Income
    },
    {
        id: "975b175d-d775-4ee2-8e0a-0e8dacb927bd",
        name: "Other",
        type: TransactionType.Income
    }
] 