import React from 'react'

import Header from '../../layout/Header'

const Hero = () => {
    return (
        <>
            <Header />
            <section className='relative h-full'>
                <div className="grid place-items-center">
                    <img src="https://images.unsplash.com/photo-1578265707481-77c0ac3ce8bf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-auto' />
                    <div className='absolute'>
                        <p className=' bg-zinc-600 bg-opacity-50 text-white text-2xl' data-aos="fade-down">
                            <span>
                                From Skyline to Shoreline
                            </span>
                        </p>
                    </div>
                    <div  className='absolute pt-28' >
                        <h1 data-aos="fade-up" className='text-8xl text-bold text-white'>
                            Luxury Transportation Concierge
                        </h1>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero