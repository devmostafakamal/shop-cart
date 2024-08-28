import React from "react";
import { useState, createContext } from "react";

export const UserContext = createContext();
export default function WrapperComponent({ children }) {
  const [user, setUser] = useState("Jesse Hall");
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
