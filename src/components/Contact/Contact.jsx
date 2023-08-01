import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { Link } from 'react-scroll';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Would you like to know more?
            </p>
            <span className="cta-btn cta-btn--resume">
              <Link to="hero" smooth duration={1000}>
                  Let's Talk
              </Link>
            </span>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
