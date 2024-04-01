<<<<<<< HEAD
=======
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior

>>>>>>> 8afeeb71de3def77c35bd7cffd6485f974b8bad2
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Importa los componentes de las páginas
// Bringing in the pages the router will use to conditionally show the appropriate views

import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage'; 
import ContactPage from './pages/ContactForm'; 


// Define la configuración de las rutas
// Define the accessible routes, and which components respond to which URL

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'projects',
        element: <ProjectPage />,
      },
      {
        path: 'Contact',
        element: <ContactPage/>,
      }
    ],
  },
]);

// Renderiza el componente RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
