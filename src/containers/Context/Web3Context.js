import React, { createContext, useContext, useEffect, useState } from "react";
import Web3 from "web3";
import { magic } from "../../services/magic/index";

// Create the context with default values
const Web3Context = createContext({
  web3: null,
  initializeWeb3: () => {},
});

// Custom hook to use the Web3 context
export const useWeb3 = () => useContext(Web3Context);

// Provider component to wrap around components that need access to the context
export const Web3Provider = ({ children }) => {
  // State variable to hold an instance of Web3
  const [web3, setWeb3] = useState(null);

  // Initialize Web3
  const initializeWeb3 = async () => {
    // Get the provider from the Magic instance
    const provider = await magic.wallet.getProvider();

    // Create a new instance of Web3 with the provider
    const web3 = new Web3(provider);

    // Save the instance to state
    setWeb3(web3);
  };

  return (
    <Web3Context.Provider
      value={{
        web3,
        initializeWeb3,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
