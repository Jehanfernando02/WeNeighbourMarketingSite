import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      message: 'Sending message...',
      type: 'loading'
    });

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({
          message: 'Your message has been sent. Thank you!',
          type: 'success'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus({
        message: 'There was an error sending your message. Please try again.',
        type: 'error'
      });
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Get in touch with us for any questions or support needs.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-item" data-aos="fade-up">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>123 Community Street</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-item" data-aos="fade-up">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+1 234 567 8900</p>
                  <p>+1 234 567 8901</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-item" data-aos="fade-up">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@weneighbour.com</p>
                  <p>contact@weneighbour.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-item" data-aos="fade-up">
                  <i className="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday</p>
                  <p>9:00AM - 5:00PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form className="php-email-form" onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading" style={{ display: status.type === 'loading' ? 'block' : 'none' }}>Loading</div>
                  <div className="error-message" style={{ display: status.type === 'error' ? 'block' : 'none' }}>{status.message}</div>
                  <div className="sent-message" style={{ display: status.type === 'success' ? 'block' : 'none' }}>{status.message}</div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
