import LandingPage from "./Feature";
import Contact from "./Contact";
import FooterSection from "./Contact";
import OurServices from "./OurServices";
import About from "./About";

const Home = () => {
  return (
    <>
      <div className="body-bg">
      <header className="container  d-flex align-items-center">
        <div className="col-md-6">
          <h5 className="text-muted">Welcome to MediCare+ Clinic</h5>
          <h1 className="fw-bold">Best Specialists</h1>
          <p>
            We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.
          </p>
          <button className="btn btn-primary me-3">Make an Appointment</button>
          <button className="btn btn-light border">Departments</button>
        </div>
        <div className="col-md-6">
          <div className=" p-5 rounded" style={{ minHeight: "300px",backgroundColor:"#EBEEFF" }}></div>
        </div>
      </header>
      <OurServices />
      <LandingPage />
      <About />
      <Contact />
      </div>
      </>
    );
};

export default Home;