import { Suspense, lazy } from "react";

type DashboardProps = Record<string, unknown>;

const LazyDashboard = lazy(() => import("./Dashboard"));

export const Dashboard: React.FC<DashboardProps> = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyDashboard {...props} />
  </Suspense>
);
