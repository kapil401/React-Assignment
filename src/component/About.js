import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const specialists = [
  { id: 1, name: "Dr. Awaatif Al", specialty: "Dental Care" },
  { id: 2, name: "Dr. Filipa Gaspar", specialty: "Cardiology" },
  { id: 3, name: "Dr. Sukhmeet Gorae", specialty: "Neurological" },
  { id: 4, name: "Dr. Siri Jakobsson", specialty: "Pediatrics" }
];

const SpecialistCard = ({ specialist }) => {
  return (
    
    <div className="card specialist-card" style={{ backgroundColor: "#B0D0E8", borderRadius: "12px", minHeight: "200px" }}>
      <div className="card-body d-flex flex-column justify-content-end text-center" style={{ backgroundColor: "", borderRadius: "0 0 12px 12px" }}>
        <h5 className="card-title fw-bold">{specialist.name}</h5>
        <p className="card-text">{specialist.specialty}</p>
      </div>
      
    </div>
  );
};

const About = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold">We Have The Best Specialist</h2>
      <p>
        We have a wide experience in experience design and strategy,
        with locally-rooted knowledge.
      </p>
      <div className="row justify-content-center">
        {specialists.map((specialist) => (
          <div key={specialist.id} className="col-md-3">
            <SpecialistCard specialist={specialist} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
