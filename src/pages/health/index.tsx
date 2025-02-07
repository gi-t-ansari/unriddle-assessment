import { Suspense, lazy } from "react";

type HealthProps = Record<string, unknown>;

const LazyHealth = lazy(() => import("./Health"));

export const Health: React.FC<HealthProps> = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyHealth {...props} />
  </Suspense>
);
