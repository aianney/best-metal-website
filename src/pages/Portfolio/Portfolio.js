import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import PortfolioPage from '../../components/PortfolioPage/PortfolioPage'
import PortfolioOrangeBorder from '../../components/PortfolioPage/PortfolioOrangeBorder'
import PortfolioSection from '../../components/Sections/PortfolioSection/PotfolioSection'

const Portfolio = () => {
    return (
        <div>
            <PortfolioPage/>
            <PortfolioOrangeBorder/>
            <PortfolioSection/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Portfolio
