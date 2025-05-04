import React, { useState } from 'react'
import { navdatas } from '../data/navdata.js'
import clsx from 'clsx'

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)
    const toggleNavbar = () => {
        setIsNavbarOpen((prev) => !prev)

    }
    return (
        <>
            <nav className=' text-[#0a490a] font-normal text-[20px] bg-white top-0 sticky z-96 '>
                <div className='md:container flex justify-between !md:mx-auto items-center !pl-4 !pr-4 md:!pl-26 md:!pr-40  md:!py-6 !py-4'>
                    <h1 className='  cursor-pointer text-green-700'>Swoniga</h1>
                    <div className='hidden md:block'>
                        <ul className="flex gap-20">
                            {navdatas.map((nav) => (
                                <li className='cursor-pointer text-[#5a5a5a] hover:text-black transition-all duration-300'>{nav.href}</li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={toggleNavbar} className=' md:hidden block cursor-pointer '>toggle</button>
                </div>
                <hr className={clsx('', isNavbarOpen ? "visible opacity-100" : "invisible opacity-0")} />

            </nav>
            {isNavbarOpen && <div className={clsx(' text-[#0a490a] flex flex-col items-center')}>

                <ul className=' flex flex-col gap-9'>

                    {navdatas.map((nav) => (
                        <>
                            <li className=' cursor-pointer'>{nav.href}</li>
                        </>
                    ))}

                </ul>
            </div>}
        </>
    )
}

export default Navbar