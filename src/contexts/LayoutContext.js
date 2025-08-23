import React from "react";
import { createContext, useState } from "react";

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState("");

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutContext, LayoutProvider };
