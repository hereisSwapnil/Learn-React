import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorElement from "./components/ErrorElement/ErrorElement.jsx";
import Layout from "./components/Layout.jsx";
import HomePage from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Github from "./components/Github/Github.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import { githubInfoLoader } from "./components/Github/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorElement />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="github" element={<Github />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
