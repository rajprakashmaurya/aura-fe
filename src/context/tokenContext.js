import { createContext } from "react";

const TokenContext = createContext();

const TokenProvider = ({ chieldren }) => {
  return (
    <TokenContext.Provider
      value={{
        fname: "",
        lname: "maurya",
      }}
    >
      {chieldren}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
