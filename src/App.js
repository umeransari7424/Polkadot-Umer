import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import Blog from "./Components/Elements/Blog";
import Hero from "./Components/Elements/Hero";
import Interoparaility from "./Components/Elements/Interoparaility";
import Invovled from "./Components/Elements/Invovled";
import Opensource from "./Components/Elements/Opensource";
import Powering from "./Components/Elements/Powering";
import Team from "./Components/Elements/Team";
import Footer from "./Components/Layout/Footer";
import Header from './Components/Layout/Header';









function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Interoparaility/>
      <Powering/>
      <Opensource/>
      <Team/>
      <Blog/>
      <Invovled/>
      <Footer/>
     
    </div>
  );
}

export default App;
