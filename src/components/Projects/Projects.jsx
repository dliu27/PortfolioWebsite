import React, { useContext, useEffect, useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import YouTube from 'react-youtube';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRefs = useRef([]); // Ref to store multiple carousel instances

  const videoOpts = {
    height: isMobile ? '202' : '360',
    width: isMobile ? '360' : '640',
  };

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const handleCarouselPrev = (projectIndex) => {
    // Go to the previous slide for the specified project
    if (carouselRefs.current[projectIndex]) {
      carouselRefs.current[projectIndex].prev();
    }
  };

  const handleCarouselNext = (projectIndex) => {
    // Go to the next slide for the specified project
    if (carouselRefs.current[projectIndex]) {
      carouselRefs.current[projectIndex].next();
    }
  };

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />

          {projects.map((project, index) => (
            <Row key={index}>
              <Col lg={4} sm={12}>
                {/* Project Details */}
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">{project.title}</h3>
                    <div>
                      <div className="tech-stack">
                        {project.technologies.map((tech) => {
                          return (
                            <div className="tech" key={`stack-${tech}`}>
                              {tech}
                            </div>
                          );
                        })}
                      </div>

                      <p>{project.description}</p>
                      <p className='note'>{project.notes}</p>
                    </div>
                    {project.liveLink && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={project.liveLink}
                      >
                        See Live
                      </a>
                    )}
                    {project.sourceCodeLink && project.liveLink && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={project.sourceCodeLink}
                      >
                        Source Code
                      </a>
                    )}
                    {project.sourceCodeLink && !project.liveLink && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={project.sourceCodeLink}
                      >
                        Source Code
                      </a>
                    )}



                  </div>
                </Fade>
              </Col>
              <Col lg={8} sm={12}>

                {/* Carousel Arrows */}
                {project.images.length + project.videos.length > 1 && (
                  <div className="carousel-arrows">
                    <div
                      className="carousel-overlay carousel-overlay-left"
                      onClick={() => handleCarouselPrev(index)} // Pass the index of the project to the function
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div
                      className="carousel-overlay carousel-overlay-right"
                      onClick={() => handleCarouselNext(index)} // Pass the index of the project to the function
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                  </div>
                )}



                {/* Project Image */}
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    <Carousel
                      ref={(el) => (carouselRefs.current[index] = el)} // Assign the ref to the Carousel component for this project
                      interval={null}
                      indicators={true}
                      fade={true}
                      controls={false}
                      className="carousel-control"
                    >
                      {project.images.map((image, imageIndex) => (
                        <Carousel.Item key={imageIndex}>
                          <a
                            href={project.liveLink}
                            target="_blank"
                            aria-label="Project Link"
                            rel="noopener noreferrer"
                          >
                            <div className="thumbnail rounded" style={{ width: '100%', height: 'auto' }}>
                              <ProjectImg alt={project.title} filename={image} />
                            </div>
                          </a>
                        </Carousel.Item>
                      ))}
                      {project.videos.map((video, videoIndex) => (
                        <Carousel.Item key={videoIndex}>
                          <div className="thumbnail rounded">
                            <YouTube videoId={video} opts={videoOpts} />
                          </div>
                        </Carousel.Item>
                      ))}

                    </Carousel>
                  </div>
                </Fade>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
