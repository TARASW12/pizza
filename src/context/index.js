import { createContext, useContext, useState } from "react";

const FindPizza = createContext();

export const PizaWrapper = ({ children }) => {
  const [findValue, setFindValue] = useState("");
  return (
    <FindPizza.Provider value={{ findValue, setFindValue }}>
      {children}
    </FindPizza.Provider>
  );
};

export const useContextPizzaValue = () => {
  const context = useContext(FindPizza);
  return context;
};
