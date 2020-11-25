import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Payment } from "../../interfaces/payment.interface";

const diaries = createSlice({
  name: "payments",
  initialState: [] as Payment[],
  reducers: {
    getPayments(state, { payload }: PayloadAction<Payment[]>) {
      state = payload;
    },
    // payForPayment(state, { payload }: PayloadAction<Diary>) {
    //   const { id } = payload;
    //   const diaryIndex = state.findIndex((diary) => diary.id === id);
    //   if (diaryIndex !== -1) {
    //     state.splice(diaryIndex, 1, payload);
    //   }
    // },
  },
});

export const { getPayments } = diaries.actions;

export default diaries.reducer;
