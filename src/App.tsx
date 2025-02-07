import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_URL } from "./config";
import { Appointment, Chat, Checkup, Dashboard, Health, Notes } from "./pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_URL.DASHBOARD} element={<Dashboard />} />
        <Route path={APP_URL.NOTES} element={<Notes />} />
        <Route path={APP_URL.HEALTH} element={<Health />} />
        <Route path={APP_URL.CHECKUP} element={<Checkup />} />
        <Route path={APP_URL.APPOINTMENT} element={<Appointment />} />
        <Route path={APP_URL.CHAT} element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
