import React from 'react'
import Header from '../../components/header/Header'
import TopSearch from '../../components/topSearch/TopSearch'
import WelcomeArea from '../../components/welcomeArea/WelcomeArea'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <TopSearch/>
        <WelcomeArea/>
        <Footer/>
    </div>
  )
}

export default Home