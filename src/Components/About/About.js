import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Team</span>
            </h1>
            <p>Hotel Lake Toba adalah hotel yang didirikan oleh 3 sekawan pada tahun 2009. 3 sekawan tersebut memiliki julukan sebagai THE CREW karena mereka memiliki peran masing masing yang tak kalah penting.</p>
            <p>Tujuan didirikan nya Hotel Lake Toba adalah ingin memberikan rasa nyaman dan damai ketika menginap di Hotel Lake Toba dengan pemandangan langsung ke Danau Toba.</p>
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
