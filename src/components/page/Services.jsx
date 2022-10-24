import React from 'react'

const Services = () => {
  return (
    <>
       <div className="service" id="service">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>What I do</p>
                    <h2>Awesome Quality Services</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-laptop"></i>
                            </div>
                            <div className="service-text">
                                <h3>E-commers </h3>
                                <p>
                                E-commerce Website. A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer servic
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fa fa-laptop-code"></i>
                            </div>
                            <div className="service-text">
                                <h3>Frontend Development</h3>
                                <p>
                                   A Front End Developer, or Front End Web Developer, is responsible for using their knowledge of programming languages to code user-side applications, including visual elements like menu bars, clickable buttons and the overall layout of websites or web
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fab fa-android"></i>
                            </div>
                            <div className="service-text">
                                <h3>Backend developer</h3>
                                <p>
                                Back-end developers create, code, and improve the server, server-side applications, and databases that, when combined with front-end codes, help create a functional, seamless experience for the end-user.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fab fa-apple"></i>
                            </div>
                            <div className="service-text">
                                <h3>Web Development</h3>
                                <p>
                                   A Web Developer is a professional who is responsible for the design and construction of websites. They ensure that sites meet user expectations by ensuring they look good, run smoothly and offer easy access points with no loading issues between pages or error messages
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services