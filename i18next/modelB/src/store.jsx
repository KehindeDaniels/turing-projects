// store.js
import { createContext, useState } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <StoreContext.Provider value={{ selectedItems, setSelectedItems }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
