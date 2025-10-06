import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css"
import "./i18n"; 

function App() {
  return (
    <>
      <Header />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
