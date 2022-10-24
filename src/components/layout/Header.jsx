
const Header = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg bg-light navbar-light ">
            <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <a href="#home" className="nav-item nav-link">Home</a>
                        <a href="#about" className="nav-item nav-link">About</a>
                        <a href="#service" className="nav-item nav-link">Service</a>
                        <a href="#contact" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header