import React from 'react'
import ResourcesOrangeBorder from '../../components/ResourcesPage/ResourcesOrangeBorder'
import ResourcesPage from '../../components/ResourcesPage/ResourcesPage'
import ResourcesSectionOne from '../../components/Sections/ResourcesSections/ResourcesSectionOne'
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

const Resources = () => {
    return (
        <div>
            <ResourcesPage/>
            <ResourcesOrangeBorder/>
            <ResourcesSectionOne/>
            <ContactForm />
            <Footer/>
        </div>
    )
}

export default Resources
