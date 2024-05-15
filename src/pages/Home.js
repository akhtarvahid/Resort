import React from "react";
import About from "../components/About/About";
import Rooms from "../components/Rooms/Rooms";
import Footer from "./../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Gallery />
      <Rooms />
      <Footer />
    </>
  );
};

export default Home;
