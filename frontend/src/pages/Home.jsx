import React from 'react'
import Header from '../components/home/Header'
import HomeServices from '../components/home/HomeServices'
import AboutUsHome from '../components/home/AboutUsHome'
import HomeReviews from '../components/home/HomeReviews'

const Home = () => {
  return (
    <div>
      <Header />
      <HomeServices />
      <AboutUsHome />
      <HomeReviews />
    </div>
  )
}

export default Home