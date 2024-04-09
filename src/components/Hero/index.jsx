import React from 'react'
import slidePhoto from "../../assets/img/liber_Slide.jpg"
import Header from '../../layout/Header'

const Hero = () => {
    return (
        <>
            <Header />
            <section className='relative h-full'>
                <div className="grid place-items-center">
                    <img src={slidePhoto} alt="" className='w-full h-auto' />

                    {/* <iframe
                        title="External Content"
                        src="https://www.youtube.com/embed/bRjtLo5ur9Q?autohide=1&rel=0&autoplay=0&playsinline=1&iv_load_policy=3&modestbranding=1&controls=0&showinfo=0&disablekb=1&enablejsapi=1&origin=https%3A%2F%2Fridemyle.com&widgetid=1"
                        width="100%"
                        height="550px"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe> */}
                    <div data-aos="fade-down" className='absolute bg-zinc-600 bg-opacity-50 text-white text-xl p-4'>
                        <span>
                            From Skyline to Shoreline
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero