import React from 'react'
import AboutHeader from '../components/about/AboutHeader'
import StriveCustomers from '../components/about/StriveCustomers.JSX'

import OurMission from '../components/about/OurMission'
import PerfectPlan from '../components/about/PerfectPlan'
import OurCore from '../components/about/OurCore'


const About = () => {
  return (
    <div>
        <AboutHeader />
        <StriveCustomers/>
        <OurCore/>
        <OurMission/>
        <PerfectPlan/>
    </div>
  )
}

export default About