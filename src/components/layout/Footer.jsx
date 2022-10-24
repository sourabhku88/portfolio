import React from 'react'

const Footer = () => {
  return (
    <>
       <div className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <h2>Sourabh kumar</h2>
                        <h3>Jamui Bihar (pin - 811307)</h3>
                        <div className="footer-menu">
                            <p>+91 8877091933</p>
                            <p>sourabhkumar811307@gmail.com</p>
                        </div>
                        <div className="footer-social">
                            <a href="https://github.com/sourabhku88" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                            <a href="/"><i className="fab fa-youtube"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/sourabh-kumar-8446b222b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <p>&copy; <a href="/">Sourbah</a>, All Right Reserved | {new Date().getFullYear()} </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer