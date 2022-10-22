import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Base from "./Components/Layout/Base";
import Technology from "./Pages/Technology";
import Community from "./Pages/Community";
import Contact from "./Pages/Contact";
import Build from "./Pages/Build";
import About from "./Pages/About";

function App() {
  return (
    <>
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/technology" element={<Technology />} />
          <Route index path="/community" element={<Community />} />
          <Route index path="/contact" element={<Contact />} />
          <Route index path="/build" element={<Build />} />
          <Route index path="/about" element={<About />} />
        </Routes>
      </Base>
    </BrowserRouter>
  </>
  );
}

export default App;
