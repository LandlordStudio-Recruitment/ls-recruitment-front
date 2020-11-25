import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import RequestMaintenance from "../features/request-maintenance/RequestMaintenance";
import YourDocuments from "../features/your-documents/YourDocuments";

const PaymentDashboard = lazy(
  () => import("../features/dashboard/PaymentDashboard")
);

function Routes() {
  return (
    <div>
      <Route path="/" exact>
        <Suspense fallback={<p>Loading...</p>}>{<PaymentDashboard />}</Suspense>
      </Route>
      <Route path="/dashboard" exact>
        <Suspense fallback={<p>Loading...</p>}>{<PaymentDashboard />}</Suspense>
      </Route>
      <Route path="/your-documents" exact>
        <Suspense fallback={<p>Loading...</p>}>{<YourDocuments />}</Suspense>
      </Route>
      <Route path="/request-maintenance" exact>
        <Suspense fallback={<p>Loading...</p>}>
          {<RequestMaintenance />}
        </Suspense>
      </Route>
    </div>
  );
}

export default Routes;
