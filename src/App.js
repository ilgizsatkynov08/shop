import { Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Home from "./components/Home"
import Services from "./components/Services"
import About from "./components/about"
import Contact from "./components/contact"
import Detal from "./components/detal"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detal" element={<Detal />} />
      </Routes>
    </div>
  );
  
}

export default App;
