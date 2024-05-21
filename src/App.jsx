import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./comonents/Button";
import Header from "./comonents/Header";
import Hero from "./comonents/Hero";
import Benefits from "./comonents/Benefits";
import Collaboration from "./comonents/Collaboration";
import Services from "./comonents/Services";
import Pricing from "./comonents/Pricing";
import Roadmap from "./comonents/Roadmap";
import Footer from "./comonents/Footer";
function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits/>
        <Collaboration />
        <Services/>
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
