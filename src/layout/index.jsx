import React from 'react'
import Footer from './Footer'
import Hero from '../components/Hero'

const Layout = ({ children }) => {
    return (
        <>
          
            <Hero/>
            <div>{children}</div>
            <Footer />
        </>
    )
}

export default Layout