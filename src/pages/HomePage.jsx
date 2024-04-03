import React from 'react';
import Particle from '../components/Particle';
import backgroundImage from '../assets/earth.jpg'; 
import '../components/styles/home.css'; 
import Footer from '../components/Footer'; 

function HomePage() {
  return (
    <div className="background-container" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      position: 'relative', 
      overflow: 'hidden', 
    }}>
      <Particle />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <h1 className="display-4 animated-text">Welcome to My Portfolio</h1>
          <p className="animated-paragraph">Hello!👋 This is my online portfolio.</p>
          <p className="animated-paragraph">Here you'll find information about me and my projects.</p>
          <p className="animated-paragraph">Explore and discover more!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
