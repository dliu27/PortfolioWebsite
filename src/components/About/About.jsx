import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={12} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  - Recently worked at Tesla as a SWE Intern (Winter 2024)
                </p>
                <br></br>
                <p className="about-wrapper__info-text">
                  - Senior CS student at the University of Waterloo
                </p>
                <br></br>
                <p className="about-wrapper__info-text">
                  - Excelled in 5 Software Engineering internships
                </p>
                <br></br>
                <div className="about-wrapper__info-text">
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Languages:</span> Go, Python, JavaScript, Shell Scripting, GraphQL, Java, Kotlin, C++
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Technologies:</span> React, Node, MQTT, Redis, Postgres, Vue, Tailwind, Django, Docker, K8s, AWS, Git, Postman
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Concepts:</span> Multithreading, Concurrency, Caching, MVC, OOP, Web/Mobile
                  </p>
                </div>
                <br></br>
                <div className="about-wrapper__info-text">
                  <p>
                    Outside of work, I enjoy playing basketball 🏀, fitness 💪, and cooking 👨‍🍳
                  </p>
                  <p>
                    I'm currently seeking Fall 2024 opportunities, would love to connect!
                  </p>

                </div>

                {/* {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )} */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
