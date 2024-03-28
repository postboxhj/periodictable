import ElementsList from "./Components/ElementsList";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import ItemCard from "./Components/ItemCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elements" element={<ElementsList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/elements/:elementId" element={<ItemCard />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
