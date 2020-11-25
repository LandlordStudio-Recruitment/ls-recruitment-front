export interface Payment {
  dueBy: Date;
  description: string;
  status: PaymentStatus;
  amount: number;
  id: string;
}

export enum PaymentStatus {
  Overdue = 1,
}
