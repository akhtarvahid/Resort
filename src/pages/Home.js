import React from 'react';
import Header from '../components/home/Header';
import About from '../components/home/About';
import Rooms from '../components/home/Rooms';
import Footer from './../components/home/Footer';
import Gallary from '../components/home/Gallary';

const Home = () => {
    return (
        <>
         <Header />   
         <About />
         <Gallary />
         <Rooms />
         <Footer />
        </>
    );
};

export default Home;