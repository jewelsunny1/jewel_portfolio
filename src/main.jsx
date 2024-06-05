import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />,
    children: [
      {
        index: true, // 'index: true' refers to rendering AboutMe at '/' meaning this is technically the homepage
        element: <AboutMe />,
      },
      {
        path:'/portfolio',
        element:<Portfolio />,
      },
      {
        path:'/contact',
        element:<Contact />,
      },
      {
        path:'/resume',
        element:<Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  
);
/*createBrowserRouter:

Creates: An instance of the router based on the route configuration you provide.
Contains: All the paths and the components that should be rendered for each path.

RouterProvider:

Provides: The router instance to the React application.
Context: Ensures that the routing context is available throughout the component tree, so any component can access routing information and perform navigation.*/
