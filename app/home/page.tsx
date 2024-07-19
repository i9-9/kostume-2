import React from 'react'
import Marquee from '../components/Marquee';
import VideoHero from '../components/VideoHero';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-black'>
        <Marquee/>
        <Header/>
        <VideoHero/>
        <Gallery/>
        <Footer/>

    </div>
  )
}

export default Home;