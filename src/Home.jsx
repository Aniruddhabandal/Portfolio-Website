import React from 'react'
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import Resume from './Resume';
import Project from './Project';
import Contact from './Contact';


const Home = () => {
  return (
    <div className='bg-light'>
      <div className='container bg-light '>
      <div className="row justify-content-center">
    <div className="col-sm-8">
        <h1 className='text-dark fw-bold'>Aniruddha Bandal</h1>
            <h3 className='fw-bold'>   
         <Typewriter
            options={{
            strings: ['I am Full Stack Developer','I am Mern Stack Developer'],
            autoStart: true,
            loop: true,
            
            
                    }}
                 
        />
           </h3>
           <a className="btn btn-danger btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="../assets/resume.pdf">Resume</a>
    </div>
     <div className="col-sm-4">
       <img src='../assets/Aniruddhaa.png' className='img-fluid' alt="" /> 
    </div> 
    <section className="bg-light py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-xxl-8">
                            <div className="text-center my-5">
                              
                                <h2 className="display-5 fw-bolder text-warning"><span className="text-gradient d-inline">About Me</span></h2>
                                
                                <h1 className='lead fw-light mb-4'> My name is Aniruddha Bandal and I help brands to develop an responsive website.</h1>
                               
                                  <h1 className='text-warning'>Skills:-</h1>
                                  <p className="text-muted">
                                  <i className="fa-brands fa-html5 fa-2xl" style={{color:'blue'}}></i>
                                  <i className="fa-brands fa-css3 fa-2xl" style={{color:'blue'}}></i>
                                  <i className="fa-brands fa-bootstrap fa-2xl" style={{color:'blue'}}></i>
                                  <i className="fa-brands fa-react fa-2xl" style={{color:'blue'}}></i>
                                  <i className="fa-brands fa-node-js fa-2xl" style={{color:'blue'}}></i>
                                  <i className="fa-brands fa-java fa-2xl" style={{color:'blue'}}></i>
                                  <i className="fa-brands fa-python fa-2xl" style={{color:'blue'}}></i>
                                    

                                </p>
                                <div className="d-flex justify-content-center fs-2 gap-4">
                                    <Link className="text-gradient" to="https://x.com/AniruddhaBanda2"><i className="bi bi-twitter"></i></Link>
                                    <Link className="text-gradient" to="https://www.linkedin.com/in/aniruddha-bandal-01a25a282/"><i className="bi bi-linkedin"></i></Link>
                                    <Link className="text-gradient" to="https://github.com/Aniruddhabandal"><i className="bi bi-github"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                      
    </div>
    </div>
    <Resume/>
    <Project/>
    <Contact/>
  
    </div>
     
     
  )
}

export default Home;
