import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPayments } from "../../api/lsAPI";
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
  },
});

export const { getPaymentsSuccess, getPaymentsFailure } = payments.actions;

export default payments.reducer;

export const fetchPayments = (): AppThunk => async (dispatch) => {
  try {
    const payments = await getPayments();
    dispatch(getPaymentsSuccess(payments));
  } catch (err) {
    dispatch(getPaymentsFailure(err.toString()));
  }
};
