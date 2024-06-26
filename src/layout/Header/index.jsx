import React, { useEffect, useState } from 'react'

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className="container  fixed left-0 right-0 pt-5 z-50  transition-colors duration-300 shadow-2xl z-40">
                <div className={`navbar   opacity-65 z-40 rounded-[7px] ${scroll ? 'bg-white' : 'bg-[#222529]'}`}  style={{ color: scroll ? 'black' : 'white' }}>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                        <div className=" hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><a>Item 1</a></li>
                                <li>
                                    <details>
                                        <summary>Parent</summary>
                                        <ul className="p-2">
                                            <li><a>Submenu 1</a></li>
                                            <li><a>Submenu 2</a></li>
                                        </ul>
                                    </details>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <a className="btn border-none text-white bg-[#1274e7] hover:text-black">Contact Sales</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header