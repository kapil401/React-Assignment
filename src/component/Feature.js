import React from 'react';
import phoneimg from "../image/Screen.png"
import Slideshow from './OurServices';
import MobileImg from "../image/doctor-woman.png"
import doctorman from "../image/doctor-man.png"
import ambulance from "../image/ambulance.png"



const LandingPage = () => {
  return (
    <section className="container mb-3 d-flex align-items-center">
    <div className="col-md-6">
      <h2 className="fw-bold">Clinic With Innovation</h2>
      <p className="text-muted">
        We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.
      </p>
      <button className="btn btn-primary">Learn More</button>
    </div>
    <div className="col-md-6 mt-5 d-flex flex-column align-items-center">
      <div className="d-flex">
        <div className="card p-4 shadow-sm rounded me-3">
          <img src={MobileImg} alt="Qualified Doctors" className="mb-3 img-doctor" />
          <h5 className='mt-5'>Qualified Doctors</h5>
        </div>
        <div className="card p-4 shadow-sm rounded">
          <img src={doctorman} alt="Emergency Care" className="mb-3 img-doctor" />
          <h5 className='mt-5'>Emergency Care</h5>
        </div>
      </div>
      <div className="card p-4 shadow-sm rounded mt-5" style={{height:"128px"}}>
        <img src={ambulance} alt="24 Hours Service" className="mb-3 img-car" />
        <h5 className='mt-5'>24 Hours Service</h5>
      </div>
    </div>
  </section>

  );
};

export default LandingPage;
