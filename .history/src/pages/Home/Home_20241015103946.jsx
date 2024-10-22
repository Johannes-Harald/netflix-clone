import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.avif'
import hero_title from '../../assets/t3.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/hero_title.png'
import Footer from '../../components/Footer/Footer.jsx'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div>
      <img src={hero_banner} alt="" className='banner-img'/>        
        <div className='hero-caption'>
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Discovering mystery...</p>
          <div className='hero-btns'>
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className='more-cards'>
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/>
      <TitleCards title={"Upcoming"} category={"now_playing"}/>
      <TitleCards title={"Top Pics for You"} category={"upcoming"}/>      
      </div>
      <Footer/>
    </div>
  )
}

export default Home