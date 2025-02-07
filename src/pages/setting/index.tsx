import { Suspense, lazy } from "react";

type SettingProps = Record<string, unknown>;

const LazySetting = lazy(() => import("./Setting"));

export const Setting: React.FC<SettingProps> = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazySetting {...props} />
  </Suspense>
);
