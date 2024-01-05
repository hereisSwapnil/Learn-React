import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
export default App;
