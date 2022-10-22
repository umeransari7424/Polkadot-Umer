import React from 'react';
import Grant from '../Components/Elements/Community/Grant';
import Hero from '../Components/Elements/Community/Hero';
import Involved from '../Components/Elements/Community/Involved';
import Network from '../Components/Elements/Community/Network';
import Run from '../Components/Elements/Community/Run';
import Twitter from '../Components/Elements/Community/Twitter';
import Upcomming from '../Components/Elements/Community/Upcomming';
import Validator from '../Components/Elements/Community/Validator';
function Community() {
  return (
    <div>
        <Hero/>
        <Twitter/>
        <Run/>
        <Network/>
        <Validator/>
        <Grant/>
        <Upcomming/>
        <Involved/>
    </div>
  )
}

export default Community