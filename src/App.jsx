import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Deals from "./Components/Deals/Deals";
import Products from "./pages/Menu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Deals />} />
              <Route path="/products" element={<Products />} />
            </Routes>
            <Footer />
      </Router>
    </div>
  );
}

export default App;
