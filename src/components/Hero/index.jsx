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
                    <div className='absolute bg-zinc-600 bg-opacity-50 text-white text-xl p-4'>
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