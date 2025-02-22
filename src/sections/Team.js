import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/sections/Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Jehan Fernando",
      position: "Leader",
      image: "assets/img/testimonials/testimonials-1.jpg",
      description: "Leading the team with vision and strategy.",
    },
    {
      name: "Nimesh Deepamal",
      position: "Frontend & Backend Developer",
      image: "assets/img/testimonials/testimonials-4.jpg",
      description: "Handles both frontend and backend development.",
    },
    {
      name: "Sahan Randeepa",
      position: "Backend Developer",
      image: "assets/img/testimonials/testimonials-3.jpg",
      description: "Manages backend services and database.",
    },
    {
      name: "Pasindu Dilshan",
      position: "Entrepreneur",
      image: "assets/img/testimonials/testimonials-5.jpg",
      description: "Bringing business strategies and innovation.",
    },
    {
      name: "Chamuditha Nonis",
      position: "Entrepreneur",
      image: "assets/img/testimonials/testimonials-5.jpg",
      description: "Focused on scaling business opportunities.",
    },
    {
      name: "Sarani Dinethma",
      position: "UI/UX Designer & Frontend Developer",
      image: "assets/img/testimonials/testimonials-2.jpg",
      description: "Creating user-friendly designs.",
    },
  ];

  return (
    <section id="team" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Meet Our Team</h2>
        <p>Get to know the passionate individuals driving our vision forward.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="testimonials-slider"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <img src={member.image} className="testimonial-img" alt={member.name} />
                <h3>{member.name}</h3>
                <h4>{member.position}</h4>
                <p>{member.description}</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="github"><i className="bi bi-github"></i></a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
