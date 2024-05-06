import React from "react";
import Header from "../components/home/Header";
import About from "../components/About/About";
import Rooms from "../components/home/Rooms";
import Footer from "./../components/home/Footer";
import Gallery from "../components/Gallery/Gallery";

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
