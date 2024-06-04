import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import AboutMe from './src/pages/AboutMe';
import Portfolio from './src/pages/Portfolio';
import Contact from './src/pages/Contact';
import Resume from './src/pages/Resume';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // 'index: true' refers to rendering AboutMe at '/'
        element: <AboutMe />,
      },
      {
        path:'/Portfolio',
        element:<Portfolio />,
      },
      {
        path:'/Contact',
        element:<Contact />,
      },
      {
        path:'/Resume',
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
