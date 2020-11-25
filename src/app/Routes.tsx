import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

const PaymentDashboard = lazy(
  () => import("../features/dashboard/PaymentDashboard")
);

function Routes() {
  return (
    <div>
      <Route path="/">
        <Suspense fallback={<p>Loading...</p>}>{<PaymentDashboard />}</Suspense>
      </Route>
    </div>
  );
}

export default Routes;
