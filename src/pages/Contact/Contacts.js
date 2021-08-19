import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactGoogleMap from '../../components/ContactPage/ContactGoogleMap'
import ContactOrangeBorder from '../../components/ContactPage/ContactOrangeBorder'
import ContactPage from '../../components/ContactPage/ContactPage'
import Footer from '../../components/Footer/Footer'

const Contact = () => {
    return (
        <div>
            <ContactPage/>
            <ContactOrangeBorder/>
            <ContactForm/>
            <ContactGoogleMap/>
            <Footer/>
        </div>
    )
}

export default Contact
