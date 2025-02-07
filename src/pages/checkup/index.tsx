import { Suspense, lazy } from "react";

type CheckupProps = Record<string, unknown>;

const LazyCheckup = lazy(() => import("./Checkup"));

export const Checkup: React.FC<CheckupProps> = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyCheckup {...props} />
  </Suspense>
);
