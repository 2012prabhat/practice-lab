import { createContext, useContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increaseCount = ()=>{
    setCount(prev=>prev+1);
  }
  return (
    <CounterContext.Provider value={{ count, setCount, increaseCount }}>{children}</CounterContext.Provider>
  );
};

export const useCounter = ()=>{
    return useContext(CounterContext);
}
