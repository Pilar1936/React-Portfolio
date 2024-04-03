import React from 'react';
import '../components/styles/about.css'; 
import mariaImage from '../assets/perfil.jpg'; 
import Footer from '../components/Footer'; 

// Importa SVG 
import reactIcon from '../assets/icons8-react-50.svg';
import javastIcon from '../assets/icons8-javascript-48.svg';
import htmltIcon from '../assets/icons8-html-48.svg';
import sqltIcon from '../assets/icons8-mysql-50.svg';

export default function AboutPage() {
  return (
    <div className="container pt-4">
      <div className="about-container">
        <div className="about-text">
          <h2 style={{ textAlign: 'center' }}>Maria Jones-Suarez</h2>
          <p style={{ textAlign: 'justify', textIndent: '1.27cm' }}>
          I'm Maria Jones-Suarez. I started in the world of programming a year ago, where I took two classes in HTML and CSS at Hennepin Collage. Since then, I became interested in learning more about programming. After finishing HTML and CSS classes, I decided to take the full stack bootcamp at the University of Minnesota, where I have acquired knowledge and skills in:          </p>
          <ul>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Web APIs</li>
            <li>MongoDB</li>
            <li>React</li>
            <li>Handlebars</li>
          </ul>
        </div>
        <div className="about-image">
          <img src={mariaImage} alt="Maria" />
        </div>
      </div>

      <div className="image-container">
        <img src={reactIcon} alt="React Icon" />
        <img src={javastIcon} alt="JavaScript Icon" />
        <img src={htmltIcon} alt="HTML Icon" />
        <img src={sqltIcon} alt="SQL Icon" />
      </div>
      
      <Footer />
    </div>
  );
}
