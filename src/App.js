import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Base from "./Components/Layout/Base";
import Technology from "./Pages/Technology";
import Community from "./Pages/Community";

function App() {
  return (
    <>
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/technology" element={<Technology />} />
          <Route index path="/community" element={<Community />} />
        </Routes>
      </Base>
    </BrowserRouter>
  </>
  );
}

export default App;
