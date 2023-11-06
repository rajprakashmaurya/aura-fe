// create a context (ware house)

import { createContext, useContext } from "react";

// provider\

// Consumer  - useContext hook

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Auth provider"}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
