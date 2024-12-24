import React from 'react'
import { Link } from 'react-router-dom'

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

const Navbars = () => {
  return (
    <div>
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container px-5">
                    <Link className="navbar-brand" to='./Home.jsx'><span className="fw-bolder text-danger">Aniruddha </span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                            <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/resume'>Resume</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/project">Projects</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav> 

  {/* <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">Aniruddha</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="./Home.jsx">Home</Nav.Link>
            <Nav.Link href="./Resume.jsx">Resume</Nav.Link>
            <Nav.Link href="./Project.jsx">Project</Nav.Link>
            <Nav.Link href="./Contact.jsx">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

    </div>
  )
}

export default Navbars
