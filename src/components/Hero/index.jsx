import React from 'react'
import slidePhoto from "../../assets/img/liber_Slide.jpg"

const Hero = () => {
  return (
    <>
    <section className='h-96 relative'>
        <img src={slidePhoto} alt=""  className='hero' />
    </section>
    </>
  )
}

export default Hero