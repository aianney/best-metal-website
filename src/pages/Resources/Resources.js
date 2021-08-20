import React from 'react'
import ResourcesOrangeBorder from '../../components/ResourcesPage/ResourcesOrangeBorder'
import ResourcesPage from '../../components/ResourcesPage/ResourcesPage'
import ResourcesSection from '../../components/Sections/ResourcesSections/ResourcesSection'
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const Resources = () => {
    return (
        <div>
            <ResourcesPage/>
            <ResourcesOrangeBorder/>
            <ResourcesSection/>
            <ContactForm />
            <Footer/>
        </div>
    )
}

export default Resources
