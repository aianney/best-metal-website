import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
      
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Navigation</h2>
            <Link to='/'>HOME</Link>
            <Link to='/'>WHY US</Link>
            <Link to='/'>SERVICES</Link>
            <Link to='/'>RESOURCES</Link>
            <Link to='/'>PORTFOLIO</Link>
            <Link to='/'>CONTACT</Link>
            {/* <Link to='/sign-up'>Sign Up</Link> */}
          </div>
          <div className='footer-paragraph-items2'>
            <h2>LOCATION</h2>
            <p>Fort Lauderdale Office</p>
            <p>1600 NE 12 Terrace</p>
            <p>Ft. Lauderdale, Fl 33306</p>
            <p>Phone: (954)-9111 EXT 209</p>
            <p>(954) 593-1900</p>
            <p>License #:CCCO18297</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>MAP HERE</h2>
            {/* <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link> */}
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='https://www.facebook.com/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      {/* <section className='social-media'>
        <div className='social-media-wrap'>
        </div>
      </section> */}
    </div>
  );
}

export default Footer;
