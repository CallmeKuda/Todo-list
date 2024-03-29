import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Context from './components/Context'
import LoginAuth from './login-auth';
import App from './App';
import './style.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginAuth/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/my-todo",
    element: <App/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}/>
    </Context>
  </React.StrictMode>,
)
