import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth > 769) {
  //     setIsDesktop(true);
  //     setIsMobile(false);
  //   } else {
  //     setIsMobile(true);
  //     setIsDesktop(false);
  //   }
  // }, []);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        {isMounted && (
          <Fade left={true} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {'Hi, my name is '}
              <span className="text-color-main">{'David.'}</span>
            </h1>
          </Fade>
        )}
        {isMounted && (
          <Fade left={true} duration={1000} delay={1500} distance="30px">
            <p className="hero-description">
              I'm currently a student at the University of Waterloo studying Computer Science.
            </p>
            <p className="hero-description">
              I've previously interned as a Software Engineer Intern at{' '}
              <span>
                <a
                  href="https://www.tesla.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-company"
                >
                  Tesla
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  href="https://www.streamforge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-company"
                >
                  Streamforge
                </a>
              </span>

              ,{' '}
              <span>
                <a
                  href="https://arcticwolf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-company"
                >
                  Arctic Wolf
                </a>
              </span>
              ,{' '}
              <span>
                <a
                  href="https://getaboard.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-company"
                >
                  Get Aboard
                </a>
              </span>
              , and{' '}
              <span>
                <a
                  href="https://maesos.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-company"
                >
                  Maesos Technologies
                </a>
              </span>
              .
            </p>
            <p className="hero-description">
              Let's discuss how I can bring my knowledge and experience to your company!
            </p>
          </Fade>
        )}

        {/* Contact Section */}
        {isMounted && (
          <Fade left={true} duration={1000} delay={2000} distance="30px">
            <div className="contact-section">
              <div className="contact-item">
                <span className="contact-text">Contact:</span>
              </div>

              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <span className="contact-text hero-company">david.liu4@uwaterloo.ca</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <span className="contact-text hero-company">647-998-1788</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                <a
                  href="https://github.com/dliu27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text hero-company"
                >
                  dliu27
                </a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
                <a
                  href="https://www.linkedin.com/in/dliu27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text hero-company"
                >
                  dliu27
                </a>
              </div>
            </div>
          </Fade>
        )}

        {isMounted && (
          <Fade left={true} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <span className="cta-btn cta-btn--hero">
                <Link to="about" smooth duration={1000}>
                  About
                </Link>
              </span>
              <span className="cta-btn cta-btn--hero">
                <Link to="projects" smooth duration={1000}>
                  Projects
                </Link>
              </span>
              {/* Add more links as needed */}
            </p>
          </Fade>
        )}
      </Container>
    </section>
  );
};

export default Header;
