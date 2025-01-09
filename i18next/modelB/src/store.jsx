// Import the required modules
import { createContext, useState } from "react";

// Define the StoreContext
const StoreContext = createContext();

// Define the StoreProvider component
const StoreProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <StoreContext.Provider value={{ selectedItems, setSelectedItems }}>
      {children}
    </StoreContext.Provider>
  );
};

// Export the StoreContext and StoreProvider
export { StoreContext, StoreProvider };
