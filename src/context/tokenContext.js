import { createContext } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  return (
    <TokenContext.Provider
      value={{
        fname: "",
        lname: "maurya",
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
