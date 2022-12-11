import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import About from './about';
import Contact from './contact';
import Thank from './thanks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  }, {
    path: '/thanks',
    element: <Thank />,
  },
]);

export default router;
