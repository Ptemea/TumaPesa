//Account.ts

export interface Account {
    name: string;
    balance: number;
    accountNumber: number;
    routingNumber?: number;
    transactions?: Transaction[];
    debitCardInfo?: DebitCardInfo;
  }
  
  export interface Transaction {
    description: string;
    amount: number;
    date: string;
    status: string;
    toAccountNumber: number;
    toRoutingNumber: number;
  }
  
  export interface DebitCardInfo {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  }
  