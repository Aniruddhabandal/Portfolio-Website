import React from 'react' 
import './Project.css'
const Project = () => {
  return (
    <div >
       <section className="py-5">
                <div className="container px-5 mb-5">
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0 text-warning"><span className="text-gradient d-inline">Projects</span></h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                         
                            <div className="card overflow-hidden bg-light shadow rounded-4 border-0 mb-5">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">Ecommerce Website</h2>
                                            <p>The Website was developed to show case knowledge of json,crud applications</p>
                                        </div>
                                        <img className="img-fluid image" src='../assets/Prohect1.png' alt="..." />
                                    </div>
                                </div>
                            </div>
                       
                            <div className="card overflow-hidden bg-light shadow rounded-4 border-0">
                                <div className="card-body p-0">
                                    <div className="d-flex align-items-center">
                                        <div className="p-5">
                                            <h2 className="fw-bolder">Movie Details Website</h2>
                                            <p>Main motive of this website is used display multiple cards and create a link to movie download and details. <b>Still Working on it</b></p>
                                        </div>
                                        <img className="img-fluid image" src="../assets/Project2.png" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         
            <section className="py-5 bg-gradient-primary-to-secondary text-white">
                <div className="container px-5 my-5">
                    <div className="text-center text-dark">
                        <h2 className="display-4 fw-bolder mb-4">Let's build something together</h2>
                        <a className="btn btn-outline-warning btn-lg px-5 py-3 fs-6 fw-bolder" href="/contact">Contact me</a>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Project
