import React, { useState } from 'react';
import MarImage from '../assets/Maria.gif'; 
// import { Roll } from 'react-reveal';
import Footer from '../components/Footer';



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', maxWidth: '800px', margin: '20px auto 0 auto' }}>
        <form onSubmit={handleSubmit} style={{ flex: '1', marginRight: '20px' }}>
          <div className="form-group">
            <label htmlFor="name" style={{ marginBottom: '5px', display: 'block' }}>Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" style={{ marginBottom: '5px', display: 'block' }}>Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" style={{ marginBottom: '5px', display: 'block' }}>Text:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>Enviar</button>
        </form>
        {/* <Roll bottom> */}
        <div>
          <img src={MarImage} alt="Maria" style={{ maxWidth: '400px' }} /> 
        {/* </Roll> */}
        </div>
      </div>
      <Footer /> {/* Agrega el componente Footer al final de tu página */}
    </div>
  );
};

export default ContactForm;

