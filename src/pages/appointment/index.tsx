import { Suspense, lazy } from "react";

type AppointmentProps = Record<string, unknown>;

const LazyAppointment = lazy(() => import("./Appointment"));

export const Appointment: React.FC<AppointmentProps> = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyAppointment {...props} />
  </Suspense>
);
