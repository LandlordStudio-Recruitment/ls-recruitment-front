export interface Payment {
  dueBy: Date;
  description: string;
  status: string;
  amount: number;
  id: string;
}

export enum PaymentStatus {
  Overdue = 1,
}
