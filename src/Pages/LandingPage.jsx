import React from "react";
import Hero from "../components/Hero";
import Sponsor from "../components/sponsor/Sponsor";
import Explore from "../components/Explore";
import Unggulan from "../components/Unggulan";
import PetaPotensi from "../components/PetaPotensi";
import Hubungi from "../components/Hubungi";
import PeluangInvestasi from "../components/PeluangInvestasi";
import Footer from "../components/Footer";
import LatestNews from "../components/LatestNews";

function LandingPage() {
  return (
    <>
      <Hero />
      <Sponsor />
      <Explore />
      <Unggulan />
      <PetaPotensi />
      <PeluangInvestasi />
      <LatestNews />
      <Hubungi />
      <Footer />
    </>
  );
}

export default LandingPage;
