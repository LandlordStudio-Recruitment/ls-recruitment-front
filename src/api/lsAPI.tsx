import axios from "axios";
import { Payment } from "../interfaces/payment.interface";

export interface PaymentsResult {
  payments: Payment[];
}

export async function getPayments(): Promise<Payment[]> {
  const url = process.env.REACT_APP_API_URL + "/payment";
  const response = await axios.get<Payment[]>(url);
  return response.data;
}
