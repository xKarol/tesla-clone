import { createContext } from "react";
import { useWindowSize } from "../hooks/use-window-size";

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const { width, height } = useWindowSize();

  return (
    <AppContext.Provider value={{ width, height }}>{children}</AppContext.Provider>
  );
}
