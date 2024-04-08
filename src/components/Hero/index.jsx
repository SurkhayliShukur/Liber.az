import React from 'react'
import slidePhoto from "../../assets/img/liber_Slide.jpg"

const Hero = () => {
    return (
        <>
            <section className='h-full'>
                <img src={slidePhoto} alt="" className='hero' />
                <div className=' '>
                    {/* <h4 className='bg-zinc-600 opacity-50 text-white text-xl'>
                        From Skyline to Shoreline
                    </h4> */}
                </div>
            </section>
        </>
    )
}

export default Hero