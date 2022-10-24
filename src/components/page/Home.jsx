import React from 'react'
import Typed from "react-typed"
import Hero from '../../img/hero.png';
import resume from '../../SourabhResume.pdf'
const Home = () => {
  
  return (
    <>
       <div className="hero" id="home">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-content">
                            <div className="hero-text">
                                <p>I'm</p>
                                <h1>Sourabh Kumar</h1>
                                <Typed
                                    strings={['Full satck developer' , 'Web developer', 'backend developer']}
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
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src={Hero} srcSet='not Found' alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home