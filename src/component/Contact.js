import React from "react";
// import "./Testimonial.css";

const testimonials = [
  {
    name: "Jacqueline Asong",
    role: "Patient",
    text: "I wanted to thank everyone at this facility for the quality of care and compassion they showed during my stay.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    highlighted: true,
  },
  {
    name: "Patrícia Ribeiro",
    role: "Patient",
    text: "I wanted to thank everyone at this facility for the quality of care and compassion they showed during my stay.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    highlighted: false,
  },
];

const Contact = () => {
  return (
    <>
    <div className="testimonial-container">
      <div className="testimonial-box">
        <h2 className="testimonial-title">What Our Customers Say</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                testimonial.highlighted ? "highlighted" : ""
              }`}
            >
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-user">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <div className="quote-icon">“</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="newsletter-section text-center p-4 Subscribe" >
      <h3 className="fw-bold">Subscribe to Newsletter</h3>
      <p>We have a wide experience in experience design and strategy.</p>
      <div className="d-flex justify-content-center mt-3">
        <input type="email" className="form-control w-50" placeholder="Enter your email address" style={{ borderRadius: "8px 0 0 8px" }} />
        <button className="btn btn-light" style={{ borderRadius: "0 8px 8px 0" }}>Send Now</button>
      </div>
    </div>
    </>
  );
};

export default Contact;