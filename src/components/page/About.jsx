import React from 'react'
import about from '../../img/about.jpg'

const About = () => {
  return (
    <>
       <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={about} alt="Image"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-header text-left">
                                <p>Read About Me</p>
                                <h2>6 Month's Experience</h2>
                            </div>
                            <div className="about-text">
                                <p>
                                    my name is Sourabh Kumar. I am from Bihar ( Jamui ). I'm in last year graduction and recenty i have completed my backend jounry with functionup. 
                                </p>
                            </div>
                            <div className="skills">
                                <div className="skill-name">
                                    <p>HTML</p><p>90%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"90%"}}  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>CSS</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"85%"}}  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>JavaScript</p><p>88%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"88%"}}  aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>Bootstrap</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"85%"}}  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>Nodejs</p><p>80%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"80%"}}  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>expressjs</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>Mongoose</p><p>70%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"70%"}}  aria-valuenow={70} aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>React</p><p>75%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:"75%"}}  aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <a className="btn" href="#about">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About