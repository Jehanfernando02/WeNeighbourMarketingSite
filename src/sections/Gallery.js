import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/sections/Gallery.css";

const Gallery = () => {
  const galleryItems = [
    {
      image: "/assets/img/Screenshot 2024-11-20 at 03.23.28.png",
      title: "Community Events",
      description: "Bringing neighbors together",
    },
    {
      image: "/assets/img/Screenshot 2024-11-20 at 03.24.05.png",
      title: "Local Meetups",
      description: "Building lasting connections",
    },
    {
      image: "/assets/img/Screenshot 2024-11-20 at 03.24.30.png",
      title: "Neighborhood Watch",
      description: "Keeping our community safe",
    },
    {
      image: "/assets/img/Screenshot 2024-11-20 at 03.24.48.png",
      title: "Social Gatherings",
      description: "Creating memorable moments",
    },
    {
      image: "/assets/img/Screenshot 2024-11-20 at 03.24.56.png",
      title: "Resource Sharing",
      description: "Share and help each other",
    },
    {
      image: "/assets/img/Screenshot 2024-11-20 at 03.25.04.png",
      title: "Local Business",
      description: "Support local businesses",
    },
    {
      image: "/assets/img/Screenshot 2024-11-20 at 03.25.25.png",
      title: "Emergency Alerts",
      description: "Stay informed and safe",
    },
    {
      image: "/assets/img/Screenshot 2024-11-20 at 03.25.31.png",
      title: "Digital Bulletin",
      description: "Community announcements",
    },
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>App Gallery</h2>
          <p>Take a tour through our app's features and interface</p>
        </div>

        <div className="gallery-container" data-aos="fade-up">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 15 },
            }}
            className="gallery-swiper"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="gallery-item">
                  <div className="gallery-img">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="rounded-lg shadow-md"
                      style={{ width: "150px", height: "auto", objectFit: "cover" }}
                    />
                  </div>
                  <div className="gallery-info text-center">
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-xs">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
