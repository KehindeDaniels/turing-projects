// Import the required modules
import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import { StoreContext } from "./store";

// Define the App component
const App = () => {
  const { t } = useTranslation();
  const { selectedItems } = React.useContext(StoreContext);

  return (
    <div>
      <Header />
      <main>
        <Carousel />
        {selectedItems.length > 0 && (
          <p>
            {t("cart")} ({selectedItems.length} items)
          </p>
        )}
      </main>
    </div>
  );
};

// Export the App component
export default App;
