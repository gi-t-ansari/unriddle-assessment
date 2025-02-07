import { Suspense, lazy } from "react";

type ChatProps = Record<string, unknown>;

const LazyChat = lazy(() => import("./Chat"));

export const Chat: React.FC<ChatProps> = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyChat {...props} />
  </Suspense>
);
