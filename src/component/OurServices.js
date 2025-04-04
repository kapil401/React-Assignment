import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  { id: 1, title: "Dental Care", icon: "🦷" },
  { id: 2, title: "Pulmonary", icon: "🫁" },
  { id: 3, title: "Neurological", icon: "🧠" },
  { id: 4, title: "Pediatrics", icon: "📋" }
];

const ServiceCard = ({ service, isActive, onClick }) => {
  return (
    <div
      className={`card service-card ${isActive ? "active" : ""}`}
      onClick={() => onClick(service.id)}
    >
      <div className="card-body text-center">
        <div className="icon">{service.icon}</div>
        <h5 className="card-title">{service.title}</h5>
        {isActive && <button className="btn btn-light">Learn More →</button>}
      </div>
    </div>
  );
};

const OurServices = () => {
  const [activeService, setActiveService] = useState(null);

  const handleCardClick = (id) => {
    setActiveService(id === activeService ? null : id);
  };

  return (
    <div className="container text-center my-5 ">
      <h2>Our Services</h2>
      <p>
        We provide the most full medical services, so every person could have
        the opportunity to receive qualitative medical help.
      </p>
      <div className="row justify-content-center">
        {services.map((service) => (
          <div key={service.id} className="col-md-3">
            <ServiceCard
           
              service={service}
              isActive={service.id === activeService}
              onClick={handleCardClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
