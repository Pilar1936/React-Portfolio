import React from 'react'; 
import ProjectCards from '../pages/ProjectCards';
import portfolio from '../portfolio.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styles/portfolio.css'; 
<<<<<<< HEAD
// import '../components/styles/foo'

function Portfolio() {
  return (
    <section className="container">
      <div className="project">
        <h2 className="top-title">Bootcamp Portfolio🚀</h2>
        <hr></hr>
      </div>
      
      <div className="wrapper">
        <div className="row">
          {portfolio.slice(0, 2).map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <ProjectCards
                image={project.image}
                name={project.name}
                github={project.github}
                deploy={project.deploy}
                topics={project.topics}
              />
            </div>
          ))}
        </div>
        <div className="row">
          {portfolio.slice(2, 4).map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <ProjectCards
                image={project.image}
                name={project.name}
                github={project.github}
                deploy={project.deploy}
                topics={project.topics}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
=======
import Footer from './FooterPage'; 

function Portfolio() {
  return (
    <div> {/* Envuelve todo el contenido de Portfolio en un div */}
      <section className="container">
        <div className="project">
          <h2 className="top-title">Bootcamp Portfolio🚀</h2>
          <hr></hr>
        </div>
        
        <div className="wrapper">
          <div className="row">
            {portfolio.slice(0, 2).map((project) => (
              <div key={project.id} className="col-md-6 mb-4">
                <ProjectCards
                  image={project.image}
                  name={project.name}
                  github={project.github}
                  deploy={project.deploy}
                  topics={project.topics}
                />
              </div>
            ))}
          </div>
          <div className="row">
            {portfolio.slice(2, 4).map((project) => (
              <div key={project.id} className="col-md-6 mb-4">
                <ProjectCards
                  image={project.image}
                  name={project.name}
                  github={project.github}
                  deploy={project.deploy}
                  topics={project.topics}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer /> {/* Agrega el componente Footer al final de la página */}
    </div>
>>>>>>> 8afeeb71de3def77c35bd7cffd6485f974b8bad2
  );
}

export default Portfolio;
<<<<<<< HEAD
=======

>>>>>>> 8afeeb71de3def77c35bd7cffd6485f974b8bad2
