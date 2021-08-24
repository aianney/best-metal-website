import React from 'react';
import ShopNowText from '../../components/ShopNowText/ShopNowText';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HomePage/HomePage'
import ContactForm from '../../components/ContactForm/ContactForm';
import OrangeBorderTextW from '../../components/HomePage/WhyUsOrangeBorder';
import SectionOneHome from '../../components/Sections/HomeSections/SectionOneHome'




function Home() {
  return (
    <>
      <HeroSection/><br/>
      <OrangeBorderTextW/>
      <SectionOneHome/> <br/>
      <ShopNowText/> 
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default Home;