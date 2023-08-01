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
                  I've completed 4 full-stack software development internships, receiving "Outstanding" and "Excellent" ratings, and leaving a measurable impact at each company. I have a strong intuition for problem solving, a philosophy for practicality, and expertise in building full-stack systems from ideation to production.
                </p>
                <br></br>
                <div className="about-wrapper__info-text">
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Languages:</span> Javascript, Python, GraphQL, Kotlin, Java, C++
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Frameworks:</span> React, Node, Express, Vue, TailwindCSS, Django, Apollo Client, Sass, Bootstrap, Lodash
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Tools:</span> AWS, PostgreSQL, Git, Docker, Linux, Postman, REST APIs
                  </p>
                </div>
                <br></br>
                <div className="about-wrapper__info-text">
                  <p>
                    Outside of work, I enjoy playing basketball 🏀, flipping items on Kijiji 💹, and cooking 👨‍🍳
                  </p>
                  <p>
                    I'm currently seeking Winter 2024 opportunities, would love to connect!
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
