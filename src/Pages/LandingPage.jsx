import React from "react";
import Hero from "../components/Hero";
import Sponsor from "../components/sponsor/Sponsor";
import Explore from "../components/Explore";
import Unggulan from "../components/Unggulan";
import PetaPotensi from "../components/PetaPotensi";
import PeluangInvestasi from "../components/PeluangInvestasi";
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
    </>
  );
}

export default LandingPage;
