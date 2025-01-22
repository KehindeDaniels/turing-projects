import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Home from "./pages/Home";
import Courses from "./pages/Courses";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
