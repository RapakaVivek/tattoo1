import React from 'react'
import Nav from './Nav'
import Footer from './Footer';
import ImageSliders from './ImageSliders';
import PopularTatoos from './PopularTatoos';
import TattooArtists from './TattooArtists';
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
        <Nav />
        <ImageSliders />
        <PopularTatoos />
        <TattooArtists />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home