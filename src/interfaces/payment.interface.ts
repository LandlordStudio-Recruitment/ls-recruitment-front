export interface Payment {
  dueDate: string;
  description: string;
  category: string;
  status: string;
  amount: number;
  id: string;
}

export enum PaymentStatus {
  Overdue = 1,
}
