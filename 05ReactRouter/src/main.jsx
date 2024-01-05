import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorElement from './components/ErrorElement/ErrorElement.jsx';
import Layout from './components/Layout.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import About from './components/About/About.jsx';
import Careers from './components/Careers/Careers.jsx';
import History from './components/History/History.jsx';
import Services from './components/Services/Services.jsx';
import Projects from './components/Projects/Projects.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import GithubUser from './components/GithubUser/GithubUser.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<ErrorElement/>}>
      <Route path="" element={<HomePage/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="careers" element={<Careers/>}/>
      <Route path="history" element={<History/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="blogs" element={<Blogs/>}/>
      <Route path="github" element={<GithubUser/>}/>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
