import { Suspense, lazy } from "react";

type ProfileProps = Record<string, unknown>;

const LazyProfile = lazy(() => import("./Profile"));

export const Profile: React.FC<ProfileProps> = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyProfile {...props} />
  </Suspense>
);
