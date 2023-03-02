import { createContext } from "react";

const initalSate = localStorage.getItem("token");
const ProviderStore = createContext(initalSate);

export const ParentProvider = ({ children }) => {
  return (
    <ProviderStore.Provider value={{ initalSate }}>
      {children}
    </ProviderStore.Provider>
  );
};
