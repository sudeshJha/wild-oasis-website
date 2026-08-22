"use client";

import { createContext, use, useState } from "react";

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

const ReservationProvider = ({ children }) => {
  const [range, setRange] = useState(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange }}>
      {children}
    </ReservationContext.Provider>
  );
};

function useReservation() {
  const context = use(ReservationContext);

  if (context === undefined)
    throw new Error("Context was used outside Reservation Provider");

  return context;
}

export { ReservationProvider, useReservation };
