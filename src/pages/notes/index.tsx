import { Suspense, lazy } from "react";

type NotesProps = Record<string, unknown>;

const LazyNotes = lazy(() => import("./Notes"));

export const Notes: React.FC<NotesProps> = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyNotes {...props} />
  </Suspense>
);
