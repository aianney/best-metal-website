import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import FaqOrangeBorder from "../../components/FaqPage/FaqOrangeBorder";
import FaqPage from "../../components/FaqPage/FaqPage";
import Footer from "../../components/Footer/Footer";
import FaqSection from "../../components/Sections/FaqSection/FaqSection";

const Faq = () => {
	return (
		<div>
			<FaqPage />
			<FaqOrangeBorder />
			<FaqSection />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Faq;
