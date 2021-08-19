import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import SectionOneServices from '../../components/Sections/ServicesSections/SectionOneServices'
import SectionTwoServices from '../../components/Sections/ServicesSections/SectionTwoServices'
import ServicesOrangeBorder from "../../components/ServicesPage/ServicesOrangeBorder";
import ServicesPage from "../../components/ServicesPage/ServicesPage";

const Services = () => {
	return (
		<>
			<ServicesPage />
            <ServicesOrangeBorder/>
            <SectionOneServices/>
			<SectionTwoServices/>
			<ContactForm />
			<Footer/>
		</>
	);
};

export default Services;
