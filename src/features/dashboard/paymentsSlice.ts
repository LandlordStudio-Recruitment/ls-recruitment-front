import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPayments, makePayment } from "../../api/lsAPI";
import { Payment } from "../../interfaces/payment.interface";
import { AppThunk } from "../../store";

interface PaymentsState {
  payments: Payment[];
  error: string | null;
}

const paymentsInitialState: PaymentsState = {
  payments: [],
  error: null,
};

interface PaymentFailurePayload {
  id: string;
  error: string;
}

const payments = createSlice({
  name: "payments",
  initialState: paymentsInitialState,
  reducers: {
    getPaymentsSuccess(state: PaymentsState, action: PayloadAction<Payment[]>) {
      state.payments = action.payload;
    },
    getPaymentsFailure(state: PaymentsState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    makePaymentSucces(state: PaymentsState, action: PayloadAction<Payment>) {
      const index = state.payments.findIndex((x) => x.id === action.payload.id);
      state.payments[index].status = action.payload.status;
    },
    makePaymentFailure(state: PaymentsState, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const {
  getPaymentsSuccess,
  getPaymentsFailure,
  makePaymentSucces,
  makePaymentFailure,
} = payments.actions;

export default payments.reducer;

export const fetchPaymentsThunk = (): AppThunk => async (dispatch) => {
  try {
    const payments = await getPayments();
    dispatch(getPaymentsSuccess(payments));
  } catch (err) {
    dispatch(getPaymentsFailure(err.toString()));
  }
};

export const makePaymentThunk = (id: string): AppThunk => async (dispatch) => {
  try {
    const payment = await makePayment(id);
    dispatch(makePaymentSucces(payment));
  } catch (err) {
    dispatch(makePaymentFailure(err));
  }
};
