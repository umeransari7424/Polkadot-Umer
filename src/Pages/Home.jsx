import React from 'react';
import Blog from "../Components/Elements/Home/Blog";
import Hero from "../Components/Elements/Home/Hero";
import Interoparaility from "../Components/Elements/Home/Interoparaility";
import Invovled from "../Components/Elements/Home/Invovled";
import Opensource from "../Components/Elements/Home/Opensource";
import Powering from "../Components/Elements/Home/Powering";
import Team from "../Components/Elements/Home/Team";

function Home() {
  return (
    <div>
      <Hero/>
      <Interoparaility/>
      <Powering/>
      <Opensource/>
      <Team/>
      <Blog/>
      <Invovled/>
    </div>
  )
}

export default Home