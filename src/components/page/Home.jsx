import React from 'react'
import Typed from "react-typed"
// import Hero from '../../img/hero.png';
import resume from '../../SourabhResume.pdf'
const Home = () => {
  
  return (
    <>
       <div className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <p>I'm</p>
                                <h1>Sourabh Kumar</h1>
                                <Typed
                                    strings={['Full Stack Developer' , 'Web Developer', 'Backend Developer']}
                                        typeSpeed={100}
                                        backSpeed={50}
                                        loop
                                        />
                            </div>
                            <div className="hero-btn">
                                <a className="btn" href={resume} download = {resume} >Download Resume </a>
                                <a className="btn" href="#contact">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home