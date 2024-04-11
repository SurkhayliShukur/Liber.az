import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='bg-[#343A40] h-auto pt-28 pb-28'>
                <div className='container flex flex-wrap flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-start'>
                    <div data-aos="fade-up" className='lg:w-1/3'>
                        <h1 className='text-4xl font-bold text-uppercase text-white'><a className="btn btn-ghost text-xl">daisyUI</a></h1>
                        <p className='text-xl text-bg-gray-200'>We think about logistics, so you don't have to..</p>
                    </div>
                    <div data-aos="fade-up" className='lg:w-1/3 lg:ml-8 mt-8 lg:mt-0'>
                        <h1 className='text-2xl text-white mb-2'>Industries Served</h1>
                        <p className='text-xl text-bg-gray-200'>Transit</p>
                        <p className='text-xl text-bg-gray-200'>Nemt</p>
                        <p className='text-xl text-bg-gray-200'>Elite</p>
                    </div>
                    <div data-aos="fade-up" className='lg:w-1/3 lg:ml-8 mt-8 lg:mt-0'>
                        <h1 className='text-2xl text-white mb-2'>Company</h1>
                        <p className='text-xl text-bg-gray-200'>Drive</p>
                        <p className='text-xl text-bg-gray-200'>Transport</p>
                        <p className='text-xl text-bg-gray-200'>Elite</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer