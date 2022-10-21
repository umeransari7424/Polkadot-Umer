import React from 'react';
import Blockchain from '../Components/Elements/Technology/Blockchain';
import Built from '../Components/Elements/Technology/Built';
import Connectingdot from '../Components/Elements/Technology/Connectingdot';
import Examples from '../Components/Elements/Technology/Examples';
import Github from '../Components/Elements/Technology/Github';
import Groundbreaking from '../Components/Elements/Technology/Groundbreaking';
import Hero from '../Components/Elements/Technology/Hero';
import Model from '../Components/Elements/Technology/Model';
import Network from '../Components/Elements/Technology/Network';
import Parachains from '../Components/Elements/Technology/Parachains';
import Roadmap from '../Components/Elements/Technology/Roadmap';







function Technology() {
  return (
    <div>
       <Hero/>
       <Github/>
       <Blockchain/>
       <Network/>
       <Connectingdot/>
       <Built/>
       <Parachains/>
       <Groundbreaking/>
       <Model/>
       <Roadmap/>
       <Examples/>
    </div>
  )
}

export default Technology