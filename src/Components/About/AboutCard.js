import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h2>Lokasi</h2>
          <h1>
            Kami <span>Menyediakan</span> Lokasi Untuk Destinasi Anda
          </h1>
          <p>Hotel kami merupakan hotel bintang 5 yang memberikan view langsung ke danau Toba  </p>
          <p>Di hotel kami tersedia berbagai fasilitas yang beranekaragam yang bisa anda nikmati selama menghabiskan kegiatan anda selama menginap di hotel kami.</p>
          <button className='secondary-btn'>
            Selengkapnya <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='rowimage'>
          <img src='/images/MicrosoftTeams-image.png' alt='' />
        </div>
      </div>
    </>
  )
}

export default AboutCard
