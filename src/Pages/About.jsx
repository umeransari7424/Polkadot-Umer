import React from 'react';
import Blog from '../Components/Elements/About/Blog';
import General from '../Components/Elements/About/General';
import Hero from '../Components/Elements/About/Hero';
import Mission from '../Components/Elements/About/Mission';
import Opensource from '../Components/Elements/About/Opensource';






function About() {
  return (
    <div>
        <Hero/>
        <Mission/>
        <Opensource/>
        <General/>
        <Blog/>
        
    </div>
  )
}

export default About