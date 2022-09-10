import React from 'react'
import AboutUs from '../components/AboutUs'
import HalfMenuList from '../components/HalfMenuList'
import Heroe from '../components/Heroe'
import Reviews from '../components/Reviews'
import SpecialDish from '../components/SpecialDish'

const Home = () => {
  return (
    <>
     <Heroe />
     <AboutUs />
     <SpecialDish />
     <HalfMenuList />
     <Reviews />
    </>
  )
}

export default Home