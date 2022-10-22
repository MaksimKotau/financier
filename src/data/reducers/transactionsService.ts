import { TransactionState } from "./transactionReducers";
import moment from 'moment';

export const getTransactions = (): TransactionState => 

  [
    {
      id: '1593f613-31f4-48d4-a11b-a2dc0bd0a363',
      name: 'Metro',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(3, 'month').startOf('month').add(1, 'day').format('YYYY-MM-DD'),
      value: 185,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '2a215473-ce2e-4f3d-8ba3-a63208245a9a',
      name: 'Provigo',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(3, 'month').startOf('month').add(8, 'day').format('YYYY-MM-DD'),
      value: 145,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '254b3d3d-ab4a-4efd-964a-17492e4d715d',
      name: 'IGA',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(3, 'month').startOf('month').add(16, 'day').format('YYYY-MM-DD'),
      value: 174,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '00c00537-7c70-46c3-8b10-12b2905ee526',
      name: 'Metro',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(3, 'month').startOf('month').add(23, 'day').format('YYYY-MM-DD'),
      value: 205,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '4c8cb0ac-c938-44cd-bd8d-5e0d85ab6788',
      name: 'Maxi',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(3, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      value: 169,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '6f4f74f9-6cc7-4202-be67-d1850dafa957',
      name: 'Esso Gas',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(3, 'month').startOf('month').add(3, 'day').format('YYYY-MM-DD'),
      value: 40,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'c40580d9-b6ac-425f-8f4d-bf68607c8d96',
      name: 'Farmaprix',
      transactionCategoryID: '23258782-fe5c-4c50-a12c-8e2807b5393c',
      date: moment().subtract(3, 'month').startOf('month').add(13, 'day').format('YYYY-MM-DD'),
      value: 25,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'c299b812-2dc1-4a46-acda-c429fec1bbbd',
      name: 'Jean Coutu',
      transactionCategoryID: '23258782-fe5c-4c50-a12c-8e2807b5393c',
      date: moment().subtract(3, 'month').startOf('month').add(27, 'day').format('YYYY-MM-DD'),
      value: 45,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'fbcac9d0-540d-4932-8488-0c8208a248fb',
      name: 'Walmart',
      transactionCategoryID: 'b1fc595f-8e8c-48c6-8145-e4ec19cc3e25',
      date: moment().subtract(3, 'month').startOf('month').add(13, 'day').format('YYYY-MM-DD'),
      value: 60,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '07d929c2-bd58-4411-93cb-bf56b58fb236',
      name: 'Book from Amazon',
      transactionCategoryID: '7d5d6991-81fe-4807-9e68-f09377a0bb7f',
      date: moment().subtract(3, 'month').startOf('month').add(12, 'day').format('YYYY-MM-DD'),
      value: 30,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '7340ac1a-13f9-408c-88f5-e7cae6c7397c',
      name: 'Clothes Winners',
      transactionCategoryID: 'db2735ca-b9cd-4fa2-b007-ffbefc0ee04c',
      date: moment().subtract(3, 'month').startOf('month').add(17, 'day').format('YYYY-MM-DD'),
      value: 75,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'fc85369d-2f16-40a6-bdaa-96511955d639',
      name: 'Exhibition of paintings by Van Gogh',
      transactionCategoryID: '946f601c-78fb-4ac8-9f7b-55b9489a93e2',
      date: moment().subtract(3, 'month').startOf('month').add(21, 'day').format('YYYY-MM-DD'),
      value: 45,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'a602a170-d8cf-4956-be81-ba7592aed049',
      name: 'Phone case from Amazon',
      transactionCategoryID: '2eff0a62-be18-4538-98d9-2c3a97247a56',
      date: moment().subtract(3, 'month').startOf('month').add(12, 'day').format('YYYY-MM-DD'),
      value: 25,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'b2ef8893-e70a-4bda-a84d-e6d791db04ed',
      name: 'Shell Gas',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(3, 'month').startOf('month').add(17, 'day').format('YYYY-MM-DD'),
      value: 40,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '153fac2d-f866-4163-9f6e-d5078e23497c',
      name: 'Car wash',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(3, 'month').startOf('month').add(14, 'day').format('YYYY-MM-DD'),
      value: 20,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '3e81e839-f49e-408a-8ec1-017c0e44b00a',
      name: 'Mortgage %%',
      transactionCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8',
      date: moment().subtract(3, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      value: 500,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: 'c149a406-6aa7-48d2-a707-7ea2a72ee917',
      date: moment().subtract(3, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Mortgage credit summ',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 500,
      description: '',
      pairTransactionID: 'a0807e03-2f60-4463-80cd-c9e83e299633',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: 'a0807e03-2f60-4463-80cd-c9e83e299633',
      date: moment().subtract(3, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Mortgage credit summ',
      accountID: 'd84b935b-32d2-4e87-ac55-d71cb279bf05',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 500,
      description: '',
      pairTransactionID: 'c149a406-6aa7-48d2-a707-7ea2a72ee917'
    },
    {
      id: '65ff4c86-47fc-4761-9cb1-adb9968a5062',
      date: moment().subtract(3, 'month').startOf('month').add(21, 'day').format('YYYY-MM-DD'),
      name: 'Pay for AFE credit',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 50,
      description: '',
      pairTransactionID: '901e5d42-c36b-4d17-824e-43dc1cf2cd0d',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: '901e5d42-c36b-4d17-824e-43dc1cf2cd0d',
      date: moment().subtract(3, 'month').startOf('month').add(21, 'day').format('YYYY-MM-DD'),
      name: 'Pay for AFE credit',
      accountID: 'ccc163c2-494c-40a6-9a9a-dc3c217279c9',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 50,
      description: '',
      pairTransactionID: '65ff4c86-47fc-4761-9cb1-adb9968a5062'
    },
    {
      id: '1ec30660-ac7d-4e83-9fed-616708534bed',
      date: moment().subtract(3, 'month').startOf('month').add(28, 'day').format('YYYY-MM-DD'),
      name: 'Pay for credit BestBuy',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 100,
      description: '',
      pairTransactionID: '568e09c0-1e9a-431a-9e37-1143889cc24d',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: '568e09c0-1e9a-431a-9e37-1143889cc24d',
      date: moment().subtract(3, 'month').startOf('month').add(28, 'day').format('YYYY-MM-DD'),
      name: 'Pay for credit BestBuy',
      accountID: 'e170a61e-a16d-4113-87d4-38e21392ccf2',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 100,
      description: '',
      pairTransactionID: '1ec30660-ac7d-4e83-9fed-616708534bed'
    },
    {
      id: 'b6466073-61a3-426f-a9c4-c22ca2bf7dfb',
      date: moment().subtract(3, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for CreditCard',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 1283,
      description: '',
      pairTransactionID: 'f13985a6-c908-4d37-bcc5-8337e4eb3e85'
    },
    {
      id: 'f13985a6-c908-4d37-bcc5-8337e4eb3e85',
      date: moment().subtract(3, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for CreditCard',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 1283,
      description: '',
      pairTransactionID: 'b6466073-61a3-426f-a9c4-c22ca2bf7dfb'
    },
    {
      id: '260714ca-ec90-4657-997a-bc8e9c34c234',
      date: moment().subtract(3, 'month').startOf('month').add(22, 'day').format('YYYY-MM-DD'),
      name: 'RRSP',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 100,
      description: '',
      pairTransactionID: '66187202-63c8-41ad-b9aa-21302f1affc3'
    },
    {
      id: '66187202-63c8-41ad-b9aa-21302f1affc3',
      date: moment().subtract(3, 'month').startOf('month').add(22, 'day').format('YYYY-MM-DD'),
      name: 'RRSP',
      accountID: '48f71cef-1ed8-471f-a546-d6031f28c712',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 100,
      description: '',
      pairTransactionID: '260714ca-ec90-4657-997a-bc8e9c34c234'
    },
    {
      id: 'b17671c0-f4dc-41cb-9f03-41df5b162ec0',
      date: moment().subtract(3, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'TFSA',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 400,
      description: '',
      pairTransactionID: 'c68be6ad-5773-489c-aa47-dfddefb1d6b4'
    },
    {
      id: 'c68be6ad-5773-489c-aa47-dfddefb1d6b4',
      date: moment().subtract(3, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'TFSA',
      accountID: '2e47e201-36bf-49d7-bc3b-25056058e91d',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 400,
      description: '',
      pairTransactionID: 'b17671c0-f4dc-41cb-9f03-41df5b162ec0'
    },
    {
      id: '86c17c71-d35f-4fb4-b994-50b73f9ae0a2',
      name: '',
      transactionCategoryID: '963fb051-b5a2-447f-a531-56323a93ae4f',
      date: moment().subtract(3, 'month').startOf('month').add(8, 'day').format('YYYY-MM-DD'),
      value: 1200,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: '7f452329-2605-4a07-92f7-c118183718e8',
      name: '',
      transactionCategoryID: '963fb051-b5a2-447f-a531-56323a93ae4f',
      date: moment().subtract(3, 'month').startOf('month').add(22, 'day').format('YYYY-MM-DD'),
      value: 1200,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: 'b05fe4e8-6bee-4149-ae53-df79154fc18c',
      name: '',
      transactionCategoryID: '102876a5-742b-4e24-b5cc-82ecea494bce',
      date: moment().subtract(3, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      value: 500,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: 'd83a3672-79ed-41fe-a3c9-4eba047c8479',
      name: 'Dividends TFSA',
      transactionCategoryID: 'c6a35319-8566-446a-b634-212ec392ce46',
      date: moment().subtract(3, 'month').startOf('month').add(5, 'day').format('YYYY-MM-DD'),
      value: 20,
      description: '',
      accountID: '2e47e201-36bf-49d7-bc3b-25056058e91d'
    },
    {
      id: 'e79c0dcc-bd9d-48ee-be72-86f153731a6c',
      name: 'BayHudson',
      transactionCategoryID: 'db2735ca-b9cd-4fa2-b007-ffbefc0ee04c',
      date: moment().subtract(3, 'month').startOf('month').add(2, 'day').format('YYYY-MM-DD'),
      value: 50,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '6917a7b4-505e-44a6-94bc-281f2fb3696d',
      name: 'Entrepot',
      transactionCategoryID: 'db2735ca-b9cd-4fa2-b007-ffbefc0ee04c',
      date: moment().subtract(2, 'month').startOf('month').add(18, 'day').format('YYYY-MM-DD'),
      value: 45,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '67885fcd-85c7-4de0-bf64-7a31c0f37c86',
      name: 'Jean Coutu',
      transactionCategoryID: 'b1fc595f-8e8c-48c6-8145-e4ec19cc3e25',
      date: moment().subtract(2, 'month').startOf('month').add(5, 'day').format('YYYY-MM-DD'),
      value: 28,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'a31fdeb5-2463-4430-bedd-04650d18e663',
      name: 'Pharmaprix',
      transactionCategoryID: 'b1fc595f-8e8c-48c6-8145-e4ec19cc3e25',
      date: moment().subtract(2, 'month').startOf('month').add(25, 'day').format('YYYY-MM-DD'),
      value: 36,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'f4d6fd36-2adc-482f-a14d-02c88546f12b',
      name: 'Udemy.com UnitTesting',
      transactionCategoryID: '7d5d6991-81fe-4807-9e68-f09377a0bb7f',
      date: moment().subtract(2, 'month').startOf('month').add(16, 'day').format('YYYY-MM-DD'),
      value: 25,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'ccdc9555-e004-4bf3-89d4-80b171d8677e',
      name: 'Maxi',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(2, 'month').startOf('month').add(5, 'day').format('YYYY-MM-DD'),
      value: 186,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '3364c2eb-5035-4936-aeef-67b26e6c7089',
      name: 'IGA',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(2, 'month').startOf('month').add(1, 'day').format('YYYY-MM-DD'),
      value: 207,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '08e5969e-734e-4904-8296-98b6586be016',
      name: 'Provigo',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(2, 'month').startOf('month').add(11, 'day').format('YYYY-MM-DD'),
      value: 115,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'f5e5129d-14a6-48fe-916d-4ecfdbdcd8a7',
      name: 'SuperC',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(2, 'month').startOf('month').add(24, 'day').format('YYYY-MM-DD'),
      value: 184,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'c0aead7b-6deb-4265-9d9d-0de9466802c9',
      name: 'Metro',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(2, 'month').startOf('month').add(18, 'day').format('YYYY-MM-DD'),
      value: 159,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'f76a0f0d-89ec-40e7-bfea-c12319d22427',
      name: 'FoodMarket',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(2, 'month').startOf('month').add(22, 'day').format('YYYY-MM-DD'),
      value: 94,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '1fca23cd-c4ad-4e25-b0ed-8399d6ed9a1d',
      name: 'BBQ',
      transactionCategoryID: '946f601c-78fb-4ac8-9f7b-55b9489a93e2',
      date: moment().subtract(2, 'month').startOf('month').add(14, 'day').format('YYYY-MM-DD'),
      value: 111,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'f72c5137-c29e-4ff1-b5dd-925e14665d2c',
      name: 'Mortgage %%',
      transactionCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8',
      date: moment().subtract(2, 'month').startOf('month').add(28, 'day').format('YYYY-MM-DD'),
      value: 500,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: '1aa790a3-8549-42e8-bf00-fe3bf4df5b8b',
      name: 'Pharmaprix',
      transactionCategoryID: '23258782-fe5c-4c50-a12c-8e2807b5393c',
      date: moment().subtract(2, 'month').startOf('month').add(11, 'day').format('YYYY-MM-DD'),
      value: 60,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'a5e08be0-63e1-4de1-aca0-13fcfd0d2969',
      name: 'IceCream in Park',
      transactionCategoryID: '2eff0a62-be18-4538-98d9-2c3a97247a56',
      date: moment().subtract(2, 'month').startOf('month').add(7, 'day').format('YYYY-MM-DD'),
      value: 20,
      description: '',
      accountID: 'd17945ac-8892-4aee-8ce7-b20af694aed3'
    },
    {
      id: '8cf99800-f530-43df-aae4-d645b6c78236',
      name: 'Gas Shell',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(2, 'month').startOf('month').add(6, 'day').format('YYYY-MM-DD'),
      value: 40,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'fadd4713-621e-40a7-9264-f79bc5031b6f',
      name: 'Gas PetroCanada',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(2, 'month').startOf('month').add(26, 'day').format('YYYY-MM-DD'),
      value: 40,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '870cd3fa-8e66-4982-aaf9-bbf76502b553',
      name: 'Oil change',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(2, 'month').startOf('month').add(17, 'day').format('YYYY-MM-DD'),
      value: 60,
      description: '',
      accountID: 'd17945ac-8892-4aee-8ce7-b20af694aed3'
    },
    {
      id: '58b7bacc-e5da-4de3-bcf0-0a8217d5683a',
      name: '',
      transactionCategoryID: '963fb051-b5a2-447f-a531-56323a93ae4f',
      date: moment().subtract(2, 'month').startOf('month').add(5, 'day').format('YYYY-MM-DD'),
      value: 1120,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: '90ce2592-3852-4cf5-83ce-734c32e193d4',
      name: '',
      transactionCategoryID: '963fb051-b5a2-447f-a531-56323a93ae4f',
      date: moment().subtract(2, 'month').startOf('month').add(20, 'day').format('YYYY-MM-DD'),
      value: 1040,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: '5aec8a90-049d-484f-8b87-f396310ef41a',
      name: 'Dividends TFSA',
      transactionCategoryID: 'c6a35319-8566-446a-b634-212ec392ce46',
      date: moment().subtract(2, 'month').startOf('month').add(28, 'day').format('YYYY-MM-DD'),
      value: 44,
      description: '',
      accountID: '2e47e201-36bf-49d7-bc3b-25056058e91d'
    },
    {
      id: 'ca1dfcfd-cc74-4650-ac0b-592494fc9dbd',
      name: '',
      transactionCategoryID: '102876a5-742b-4e24-b5cc-82ecea494bce',
      date: moment().subtract(2, 'month').startOf('month').add(27, 'day').format('YYYY-MM-DD'),
      value: 500,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: '9f8e7040-8e62-4092-8436-b1f81f40a07a',
      date: moment().subtract(2, 'month').startOf('month').add(27, 'day').format('YYYY-MM-DD'),
      name: 'Mortgage credit payment',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 500,
      description: '',
      pairTransactionID: 'a08756e3-c7c7-4290-abad-597d877cc04b',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: 'a08756e3-c7c7-4290-abad-597d877cc04b',
      date: moment().subtract(2, 'month').startOf('month').add(27, 'day').format('YYYY-MM-DD'),
      name: 'Mortgage credit payment',
      accountID: 'd84b935b-32d2-4e87-ac55-d71cb279bf05',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 500,
      description: '',
      pairTransactionID: '9f8e7040-8e62-4092-8436-b1f81f40a07a'
    },
    {
      id: '349511be-93c6-4d5c-a852-fc4d3c6f0311',
      date: moment().subtract(2, 'month').startOf('month').add(28, 'day').format('YYYY-MM-DD'),
      name: 'Pay for AFE Credit',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 50,
      description: '',
      pairTransactionID: '5d1a67fa-873d-4a4a-8487-63aa50c154e8',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: '5d1a67fa-873d-4a4a-8487-63aa50c154e8',
      date: moment().subtract(2, 'month').startOf('month').add(28, 'day').format('YYYY-MM-DD'),
      name: 'Pay for AFE Credit',
      accountID: 'ccc163c2-494c-40a6-9a9a-dc3c217279c9',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 50,
      description: '',
      pairTransactionID: '349511be-93c6-4d5c-a852-fc4d3c6f0311'
    },
    {
      id: '15e3ca13-f029-4ed9-b3cb-c8b7468720db',
      date: moment().subtract(2, 'month').startOf('month').add(28, 'day').format('YYYY-MM-DD'),
      name: 'Pay for Credit BestBuy',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 100,
      description: '',
      pairTransactionID: 'e25e18d2-777f-44ef-8945-200fbea42084',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: 'e25e18d2-777f-44ef-8945-200fbea42084',
      date: moment().subtract(2, 'month').startOf('month').add(28, 'day').format('YYYY-MM-DD'),
      name: 'Pay for Credit BestBuy',
      accountID: 'e170a61e-a16d-4113-87d4-38e21392ccf2',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 100,
      description: '',
      pairTransactionID: '15e3ca13-f029-4ed9-b3cb-c8b7468720db'
    },
    {
      id: '4193556a-3466-45b4-8afe-7b3f826d0061',
      name: 'Laptop TheSource',
      transactionCategoryID: '2eff0a62-be18-4538-98d9-2c3a97247a56',
      date: moment().subtract(2, 'month').startOf('month').add(17, 'day').format('YYYY-MM-DD'),
      value: 1000,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'aaecd04c-9965-4af2-aaab-b96c78a70a5f',
      date: moment().subtract(2, 'month').startOf('month').add(27, 'day').format('YYYY-MM-DD'),
      name: 'Pay for CreditCard',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 2380,
      description: '',
      pairTransactionID: '7d37fa52-ad26-4e86-be49-0bb488b78f7e'
    },
    {
      id: '7d37fa52-ad26-4e86-be49-0bb488b78f7e',
      date: moment().subtract(2, 'month').startOf('month').add(27, 'day').format('YYYY-MM-DD'),
      name: 'Pay for CreditCard',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 2380,
      description: '',
      pairTransactionID: 'aaecd04c-9965-4af2-aaab-b96c78a70a5f'
    },
    {
      id: '04320fb7-d854-4b6d-bedc-a7d429951417',
      date: moment().subtract(2, 'month').startOf('month').add(28, 'day').format('YYYY-MM-DD'),
      name: 'RRSP',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 100,
      description: '',
      pairTransactionID: '884ab118-6118-4ee2-9146-76b7badbd71d'
    },
    {
      id: '884ab118-6118-4ee2-9146-76b7badbd71d',
      date: moment().subtract(2, 'month').startOf('month').add(28, 'day').format('YYYY-MM-DD'),
      name: 'RRSP',
      accountID: '48f71cef-1ed8-471f-a546-d6031f28c712',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 100,
      description: '',
      pairTransactionID: '04320fb7-d854-4b6d-bedc-a7d429951417'
    },
    {
      id: '6284af78-1197-499a-9a97-0f5620ae1bf2',
      date: moment().subtract(2, 'month').startOf('month').add(24, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to TFSA',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 1150,
      description: '',
      pairTransactionID: 'f3750cdf-cc1e-4424-b355-2a97053ed75e'
    },
    {
      id: 'f3750cdf-cc1e-4424-b355-2a97053ed75e',
      date: moment().subtract(2, 'month').startOf('month').add(24, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to TFSA',
      accountID: '2e47e201-36bf-49d7-bc3b-25056058e91d',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 1150,
      description: '',
      pairTransactionID: '6284af78-1197-499a-9a97-0f5620ae1bf2'
    },
    {
      id: 'b86b8aae-a98a-4c11-ad6d-f4be2ed6ebad',
      date: moment().subtract(2, 'month').startOf('month').add(20, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to saving account',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 100,
      description: '',
      pairTransactionID: 'f99ffda0-3366-4026-9cff-e5005cee8dab'
    },
    {
      id: 'f99ffda0-3366-4026-9cff-e5005cee8dab',
      date: moment().subtract(2, 'month').startOf('month').add(20, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to saving account',
      accountID: '4a7a39dc-b7d5-4864-8c76-6d0d0f232857',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 100,
      description: '',
      pairTransactionID: 'b86b8aae-a98a-4c11-ad6d-f4be2ed6ebad'
    },
    {
      id: '7dd4a9ad-d676-46f5-b47b-42ccdf792902',
      name: 'Winners',
      transactionCategoryID: 'db2735ca-b9cd-4fa2-b007-ffbefc0ee04c',
      date: moment().subtract(1, 'month').startOf('month').add(2, 'day').format('YYYY-MM-DD'),
      value: 129,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '4bf257b5-49ab-449e-8994-2dde7ea8cd46',
      name: 'Walmart',
      transactionCategoryID: 'b1fc595f-8e8c-48c6-8145-e4ec19cc3e25',
      date: moment().subtract(1, 'month').startOf('month').add(23, 'day').format('YYYY-MM-DD'),
      value: 84,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'a6c7eb2c-21f3-47e2-ae96-383425b67bd2',
      name: 'Programming books from Amazon',
      transactionCategoryID: '7d5d6991-81fe-4807-9e68-f09377a0bb7f',
      date: moment().subtract(1, 'month').startOf('month').add(12, 'day').format('YYYY-MM-DD'),
      value: 95,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'dc607269-25bb-4a82-b7f0-4fb78879975f',
      name: 'Walmart',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(1, 'month').startOf('month').add(4, 'day').format('YYYY-MM-DD'),
      value: 210,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '7e1a8e10-01fd-4f5f-8bf7-d04cad0aaf59',
      name: 'Provigo',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(1, 'month').startOf('month').add(11, 'day').format('YYYY-MM-DD'),
      value: 184,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '4a7e9238-8c99-4c57-88dd-0bbf2bf5c363',
      name: 'IGA',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(1, 'month').startOf('month').add(18, 'day').format('YYYY-MM-DD'),
      value: 192,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'aecc4f01-eeca-4a0e-9a4e-abd728859bae',
      name: 'Walmart',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(1, 'month').startOf('month').add(25, 'day').format('YYYY-MM-DD'),
      value: 160,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '08a86269-4f19-4a55-bc20-f58a30a16ca5',
      name: 'IMax',
      transactionCategoryID: '946f601c-78fb-4ac8-9f7b-55b9489a93e2',
      date: moment().subtract(1, 'month').startOf('month').add(11, 'day').format('YYYY-MM-DD'),
      value: 50,
      description: '',
      accountID: 'd17945ac-8892-4aee-8ce7-b20af694aed3'
    },
    {
      id: '48301917-e234-4095-9743-fa387f69cf34',
      name: 'Mortgage %%',
      transactionCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      value: 500,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: 'ecc0e6ca-5d7b-440f-b1a8-3139f2940aa3',
      name: 'Pharmaprix',
      transactionCategoryID: '23258782-fe5c-4c50-a12c-8e2807b5393c',
      date: moment().subtract(1, 'month').startOf('month').add(23, 'day').format('YYYY-MM-DD'),
      value: 50,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'b5528ba2-e930-4444-b43f-638431798e22',
      name: 'STM',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(1, 'month').startOf('month').add(10, 'day').format('YYYY-MM-DD'),
      value: 10,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '789da9d1-95f6-4ee4-ac00-579ac7c473b9',
      name: 'Shell gas',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(1, 'month').startOf('month').add(10, 'day').format('YYYY-MM-DD'),
      value: 40,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'd78f5e04-0ea6-41b5-8255-21e17cc11e15',
      name: 'Shell gas',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(1, 'month').startOf('month').add(23, 'day').format('YYYY-MM-DD'),
      value: 40,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '54fa9209-1282-430b-b1f4-53da010890be',
      name: '',
      transactionCategoryID: '102876a5-742b-4e24-b5cc-82ecea494bce',
      date: moment().subtract(1, 'month').startOf('month').add(23, 'day').format('YYYY-MM-DD'),
      value: 800,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: '0d82e7b0-cd7c-4f42-9f46-850e698d042a',
      name: 'Dividends TFSA',
      transactionCategoryID: 'c6a35319-8566-446a-b634-212ec392ce46',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      value: 10,
      description: '',
      accountID: '2e47e201-36bf-49d7-bc3b-25056058e91d'
    },
    {
      id: 'a97a11e1-6568-450d-9d93-9846569c3f98',
      name: '',
      transactionCategoryID: '963fb051-b5a2-447f-a531-56323a93ae4f',
      date: moment().subtract(1, 'month').startOf('month').add(4, 'day').format('YYYY-MM-DD'),
      value: 1200,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: '636811b1-57d7-4333-9464-f791a48c5a34',
      name: '',
      transactionCategoryID: '963fb051-b5a2-447f-a531-56323a93ae4f',
      date: moment().subtract(1, 'month').startOf('month').add(18, 'day').format('YYYY-MM-DD'),
      value: 1200,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: '9bcb3f36-9504-4367-a7fd-68771cac3244',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Mortgage credit summ',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 500,
      description: '',
      pairTransactionID: '2307ace8-262b-41c8-bf14-dc35e91db8e2',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: '2307ace8-262b-41c8-bf14-dc35e91db8e2',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Mortgage credit summ',
      accountID: 'd84b935b-32d2-4e87-ac55-d71cb279bf05',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 500,
      description: '',
      pairTransactionID: '9bcb3f36-9504-4367-a7fd-68771cac3244'
    },
    {
      id: '43b5c425-3ff3-481e-a903-8b47e4fc7f5e',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for AFE Credit',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 50,
      description: '',
      pairTransactionID: '7fd21aee-36c9-4dd9-8750-ce1e20515f77',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: '7fd21aee-36c9-4dd9-8750-ce1e20515f77',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for AFE Credit',
      accountID: 'ccc163c2-494c-40a6-9a9a-dc3c217279c9',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 50,
      description: '',
      pairTransactionID: '43b5c425-3ff3-481e-a903-8b47e4fc7f5e'
    },
    {
      id: '24fd4d1a-7cef-45fc-ba6e-0ba08530e1f0',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for BestBuyCredit',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 100,
      description: '',
      pairTransactionID: '3575fe6d-16e2-4d38-9d27-cd2d0c71b2c7',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: '3575fe6d-16e2-4d38-9d27-cd2d0c71b2c7',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for BestBuyCredit',
      accountID: 'e170a61e-a16d-4113-87d4-38e21392ccf2',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 100,
      description: '',
      pairTransactionID: '24fd4d1a-7cef-45fc-ba6e-0ba08530e1f0'
    },
    {
      id: 'b954c3a8-065e-407f-8492-dfb9008603a7',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for Credit card',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 1194,
      description: '',
      pairTransactionID: '55e1ce6c-fc70-43ac-979e-ec166bf56a29'
    },
    {
      id: '55e1ce6c-fc70-43ac-979e-ec166bf56a29',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for Credit card',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 1194,
      description: '',
      pairTransactionID: 'b954c3a8-065e-407f-8492-dfb9008603a7'
    },
    {
      id: 'd9698e35-ff6f-4881-8a68-518c3d283bc2',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to RRSP',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 200,
      description: '',
      pairTransactionID: '542a1ee2-11e4-4bab-94be-3dde8edba524'
    },
    {
      id: '542a1ee2-11e4-4bab-94be-3dde8edba524',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to RRSP',
      accountID: '48f71cef-1ed8-471f-a546-d6031f28c712',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 200,
      description: '',
      pairTransactionID: 'd9698e35-ff6f-4881-8a68-518c3d283bc2'
    },
    {
      id: 'abc3b3ad-144f-4d4c-9e0d-6d6abf6c7f4d',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to TFSA',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 500,
      description: '',
      pairTransactionID: 'b8324f8a-2fe4-4184-b327-7ed64515636f'
    },
    {
      id: 'b8324f8a-2fe4-4184-b327-7ed64515636f',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to TFSA',
      accountID: '2e47e201-36bf-49d7-bc3b-25056058e91d',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 500,
      description: '',
      pairTransactionID: 'abc3b3ad-144f-4d4c-9e0d-6d6abf6c7f4d'
    },
    {
      id: 'c49ccf7d-64f6-4109-ae00-66970b0ca485',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to Saving account',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 500,
      description: '',
      pairTransactionID: 'e4210d8b-4a4e-4546-9d90-272c6cbd5c4a'
    },
    {
      id: 'e4210d8b-4a4e-4546-9d90-272c6cbd5c4a',
      date: moment().subtract(1, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to Saving account',
      accountID: '4a7a39dc-b7d5-4864-8c76-6d0d0f232857',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 500,
      description: '',
      pairTransactionID: 'c49ccf7d-64f6-4109-ae00-66970b0ca485'
    },
    {
      id: '07b93562-3373-4177-a4cf-a4d849d06be8',
      name: 'BayHudson',
      transactionCategoryID: 'db2735ca-b9cd-4fa2-b007-ffbefc0ee04c',
      date: moment().subtract(0, 'month').startOf('month').add(3, 'day').format('YYYY-MM-DD'),
      value: 160,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '6af202f4-8d7d-4731-9d02-69f76d4a3941',
      name: 'Walmart',
      transactionCategoryID: 'b1fc595f-8e8c-48c6-8145-e4ec19cc3e25',
      date: moment().subtract(0, 'month').startOf('month').add(9, 'day').format('YYYY-MM-DD'),
      value: 49,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '7d186fb6-1c66-4a2e-9b01-2972d66b6a36',
      name: 'Walmart',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(0, 'month').startOf('month').add(1, 'day').format('YYYY-MM-DD'),
      value: 224,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '0e2b208a-0a2d-4229-99b0-e0f1974b01f2',
      name: 'IGA',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(0, 'month').startOf('month').add(8, 'day').format('YYYY-MM-DD'),
      value: 200,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '1bde4c5b-8fa5-4cb4-9ef6-33c14b90a73a',
      name: 'Provigo',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(0, 'month').startOf('month').add(15, 'day').format('YYYY-MM-DD'),
      value: 158,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '5e5fbfde-ea91-4557-9f67-8d6460e527c8',
      name: 'Metro',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(0, 'month').startOf('month').add(22, 'day').format('YYYY-MM-DD'),
      value: 180,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '2a6ce6b9-e7c5-4458-a11a-ed8575d7ad15',
      name: 'Walmart',
      transactionCategoryID: 'f2a77222-5d6f-48e7-aed3-b51ffd09e982',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      value: 144,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '21951976-51a3-48cf-9cd5-91b072c8813a',
      name: 'Park',
      transactionCategoryID: '946f601c-78fb-4ac8-9f7b-55b9489a93e2',
      date: moment().subtract(0, 'month').startOf('month').add(12, 'day').format('YYYY-MM-DD'),
      value: 50,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: '67104c23-7e68-45c7-ae12-8c952fef69bc',
      name: 'JeanCoutu',
      transactionCategoryID: '23258782-fe5c-4c50-a12c-8e2807b5393c',
      date: moment().subtract(0, 'month').startOf('month').add(12, 'day').format('YYYY-MM-DD'),
      value: 80,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'e37776ad-ecc2-4049-a488-aa5aa996a1dd',
      name: 'Brother',
      transactionCategoryID: '1da94395-d6ef-46ba-b552-abb642803d38',
      date: moment().subtract(0, 'month').startOf('month').add(12, 'day').format('YYYY-MM-DD'),
      value: 60,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'c18bfb75-33ea-4a2d-aae4-4758cf46d9a9',
      name: 'Change tires',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(0, 'month').startOf('month').add(12, 'day').format('YYYY-MM-DD'),
      value: 80,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'c5389776-c0a8-4adc-957c-224f6fea50b5',
      name: 'Shell Gas',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(0, 'month').startOf('month').add(8, 'day').format('YYYY-MM-DD'),
      value: 40,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'ec357516-cbc3-4c43-829a-35d2c937802f',
      name: 'Gas Shell',
      transactionCategoryID: '95e93f81-11c7-4b3e-92c4-b1960c78fe54',
      date: moment().subtract(0, 'month').startOf('month').add(21, 'day').format('YYYY-MM-DD'),
      value: 40,
      description: '',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2'
    },
    {
      id: 'edf7bd57-4096-4fc9-9e64-a9ba0e899b0f',
      name: '',
      transactionCategoryID: '102876a5-742b-4e24-b5cc-82ecea494bce',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      value: 500,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: 'ec641ed5-e27f-4fee-9c4c-728f901ce031',
      name: 'TFSA Dividends',
      transactionCategoryID: 'c6a35319-8566-446a-b634-212ec392ce46',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      value: 29,
      description: '',
      accountID: '2e47e201-36bf-49d7-bc3b-25056058e91d'
    },
    {
      id: '381e7679-fd75-45cd-bee4-8ec325a255ac',
      name: '',
      transactionCategoryID: '963fb051-b5a2-447f-a531-56323a93ae4f',
      date: moment().subtract(0, 'month').startOf('month').add(1, 'day').format('YYYY-MM-DD'),
      value: 1040,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: 'e894f140-e0c8-4cba-bf27-8675a5efe002',
      name: '',
      transactionCategoryID: '963fb051-b5a2-447f-a531-56323a93ae4f',
      date: moment().subtract(0, 'month').startOf('month').add(15, 'day').format('YYYY-MM-DD'),
      value: 1040,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: 'b3686ab2-0103-4fec-939f-0fb9af7b99ff',
      name: '',
      transactionCategoryID: '963fb051-b5a2-447f-a531-56323a93ae4f',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      value: 1200,
      description: '',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3'
    },
    {
      id: '0a9daf08-d8d3-47d4-bc4f-22658fe27019',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Mortgage Credit summ',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 500,
      description: '',
      pairTransactionID: 'ea5fa7e0-ab38-47b0-aa38-4c9b4fbd6baa',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: 'ea5fa7e0-ab38-47b0-aa38-4c9b4fbd6baa',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Mortgage Credit summ',
      accountID: 'd84b935b-32d2-4e87-ac55-d71cb279bf05',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 500,
      description: '',
      pairTransactionID: '0a9daf08-d8d3-47d4-bc4f-22658fe27019'
    },
    {
      id: '3b87e41f-3202-4c36-9ebe-aa866a32862f',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for AFE credit',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 50,
      description: '',
      pairTransactionID: '8ad0afb9-7839-469e-a65b-e98272035fd4',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: '8ad0afb9-7839-469e-a65b-e98272035fd4',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for AFE credit',
      accountID: 'ccc163c2-494c-40a6-9a9a-dc3c217279c9',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 50,
      description: '',
      pairTransactionID: '3b87e41f-3202-4c36-9ebe-aa866a32862f'
    },
    {
      id: 'd7243da0-46e1-4312-9f7e-d96c47a00c9a',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for BestBuy credit',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 100,
      description: '',
      pairTransactionID: '8e05d615-f137-48f6-a03a-42a17b0ad77d',
      calculateTransferForCategoryID: '07151ffb-f5ec-499d-a4ed-f276408bddb8'
    },
    {
      id: '8e05d615-f137-48f6-a03a-42a17b0ad77d',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for BestBuy credit',
      accountID: 'e170a61e-a16d-4113-87d4-38e21392ccf2',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 100,
      description: '',
      pairTransactionID: 'd7243da0-46e1-4312-9f7e-d96c47a00c9a'
    },
    {
      id: '245dc597-dbfe-4ba2-bd38-1720457a2345',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for Credit card',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 1465,
      description: '',
      pairTransactionID: 'c3ba574c-d6ac-4d37-95d3-47e4abec4b0c'
    },
    {
      id: 'c3ba574c-d6ac-4d37-95d3-47e4abec4b0c',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for Credit card',
      accountID: '03305510-3333-4902-b0fa-3249eb4733b2',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 1465,
      description: '',
      pairTransactionID: '245dc597-dbfe-4ba2-bd38-1720457a2345'
    },
    {
      id: '6139c44c-378b-4a90-a5b2-560e3c6faeab',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for RRSP',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 200,
      description: '',
      pairTransactionID: '3926bc92-a1e5-4a6f-b4bd-c5d760507e67'
    },
    {
      id: '3926bc92-a1e5-4a6f-b4bd-c5d760507e67',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Pay for RRSP',
      accountID: '48f71cef-1ed8-471f-a546-d6031f28c712',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 200,
      description: '',
      pairTransactionID: '6139c44c-378b-4a90-a5b2-560e3c6faeab'
    },
    {
      id: '077f374e-685c-4384-b263-e4496fc8c0d8',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to TFSA',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 500,
      description: '',
      pairTransactionID: '0eb83715-fd62-4e53-8f13-375417025a8b'
    },
    {
      id: '0eb83715-fd62-4e53-8f13-375417025a8b',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to TFSA',
      accountID: '2e47e201-36bf-49d7-bc3b-25056058e91d',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 500,
      description: '',
      pairTransactionID: '077f374e-685c-4384-b263-e4496fc8c0d8'
    },
    {
      id: 'e0fba80d-639d-45ad-b68b-7d9f226a9516',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to Saving Account',
      accountID: '1440b4d8-ab69-4b35-a201-58cfd5ba3cd3',
      transactionCategoryID: '42f9a5d2-3fec-4ed3-878c-93095460e88e',
      value: 1000,
      description: '',
      pairTransactionID: '569c159e-8960-4edc-b18f-23137112c317'
    },
    {
      id: '569c159e-8960-4edc-b18f-23137112c317',
      date: moment().subtract(0, 'month').startOf('month').add(29, 'day').format('YYYY-MM-DD'),
      name: 'Transfer to Saving Account',
      accountID: '4a7a39dc-b7d5-4864-8c76-6d0d0f232857',
      transactionCategoryID: 'c673832a-44bd-4442-b29b-ebdf42645658',
      value: 1000,
      description: '',
      pairTransactionID: 'e0fba80d-639d-45ad-b68b-7d9f226a9516'
    }
  ]