import React from 'react'

import Header from '../../layout/Header'

const Hero = () => {
    return (
        <>
            <Header />
            <section className='relative h-full'>
            <div className="grid place-items-center">
                <img src="https://images.unsplash.com/photo-1578265707481-77c0ac3ce8bf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-auto' />
                <div className='absolute text-center inset-0 flex flex-col justify-center items-center'>
                    <p className='bg-zinc-600 bg-opacity-50 text-white text-xl md:text-3xl lg:text-4xl' data-aos="fade-down">
                        <span>
                            From Skyline to Shoreline
                        </span>
                    </p>
                    <h1 data-aos="fade-up" className='text-2xl md:text-6xl lg:text-8xl font-bold text-white mt-4 md:mt-8'>
                        Luxury Transportation Concierge
                    </h1>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero