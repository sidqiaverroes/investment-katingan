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
import ChartPage from "../components/ChartPage";
// import TablePage from "../components/TablePage";

function LandingPage() {
  return (
    <>
      <Hero />
      <Sponsor />
      <Explore />
      <Unggulan />
      {/* <TablePage /> */}
      <PetaPotensi />
      <PeluangInvestasi />
      <ChartPage />
      <LatestNews />
      <Hubungi />
      <Footer />
    </>
  );
}

export default LandingPage;
