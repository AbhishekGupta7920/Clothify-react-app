import React from 'react'
import HeroBanner from '../components/HeroBanner'
import MultiBanner from '../components/MultiBanner'
import NewCollection from '../components/NewCollection'
import MidBanner from '../components/MidBanner'
import TopSellers from '../components/TopSellers'
import Features from '../components/Features'
import TopCategory from '../components/TopCategory'

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <MultiBanner/>
      {/* <NewCollection/> */}
      <TopCategory />
      <MidBanner/>
      <TopSellers/>
      <Features/>
    </>
  )
}

export default Home
