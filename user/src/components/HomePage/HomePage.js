import React from 'react'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import Property from './Property/Property'
import NeedHelp from './NeedHelp/NeedHelp'
import Footer from '../Footer/Footer'
import HeroSection from './HeroSection/HeroSection'
import CardSection from './CardCoursal/CardSection'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <WhatWeDo />
            <Property />
            <CardSection />
            <NeedHelp />
        </>
    );
}

export default HomePage
