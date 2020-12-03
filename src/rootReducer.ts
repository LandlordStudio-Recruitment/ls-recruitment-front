import { combineReducers } from "@reduxjs/toolkit";
import paymentsReducer from "./features/dashboard/paymentsSlice";

const rootReducer = combineReducers({
  payments: paymentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
