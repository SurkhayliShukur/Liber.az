import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='bg-[#353A40] h-auto pt-28 pb-28'>
                <div className='container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center '>
                    <div className='sm:col-span-1'>
                        <h1 className='text-6xl font-bold text-uppercase text-white'>Logo</h1>
                        <p className='text-xl text-white'>Lorem ipsum dolor sit amet.</p>
                        <p className='text-xl text-white'>Lorem ipsum dolor sit amet.</p>
                        <p className='text-xl text-white'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='sm:col-span-1'>
                        <h1 className='text-3xl text-white'>Logo</h1>
                        <p className='text-xl text-white'>Lorem ipsum dolor sit amet.</p>
                        <p className='text-xl text-white'>Lorem ipsum dolor sit amet.</p>
                        <p className='text-xl text-white'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='sm:col-span-1'>
                        <h1 className='text-3xl text-white'>Logo</h1>
                        <p className='text-xl text-white'>Lorem ipsum dolor sit amet.</p>
                        <p className='text-xl text-white'>Lorem ipsum dolor sit amet.</p>
                        <p className='text-xl text-white'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer