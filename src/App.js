import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.scss";
import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import './i18n';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    AOS.init({ duration: 1000 });

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;