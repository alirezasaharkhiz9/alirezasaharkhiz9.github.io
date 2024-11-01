import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Alireza Saharkhiz via email @ as.alirezasaharkhiz@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p> Feel free to get in touch. You can email me at: as.alirezasaharkhiz@gmail.com </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
