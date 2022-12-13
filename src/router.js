import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import About from './about';
import Contact from './contact';
import Thank from './thanks';
import Main from './main';
import Signup from './signup';
import SignIn from './signin';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/travel',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/thanks',
    element: <Thank />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
]);

export default router;
