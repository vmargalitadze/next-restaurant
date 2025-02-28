"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {Link as ScrollLink} from 'react-scroll'
import Nav from "./Nav"
import NavMobile from "./NavMobile" 
import { Button } from "./button"
function Header() {
    const [active, setActive] = useState(false)

    useEffect( () => {
        const handleScroll = () => {
            setActive(window.scrollY > 100  )
        }

        window.addEventListener('scroll', handleScroll)

        return () => {

            window.removeEventListener('scroll', handleScroll)
        }


    }, [] )

  return (
    <header className={`${active ? 'bg-black-heavy py-4 ' : 'bg-none py-8 ' } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200 `}>

        <div className="container mx-auto">
            <div className="flex z-[70px] items-center justify-between ">


            <Link href='/'>
            <Image src='/logo.svg' width={75} height={30} alt="logo" />
            </Link>
            <Nav linkStyles='capitalize' containerStyles='hidden  xl:flex gap-x-12 text-white' />

            <ScrollLink to='reservation' smooth={true}>
                <Button variant='orange' size='sm' >Book a Table</Button>
            </ScrollLink>

            <NavMobile iconStyles='text-3xl' containerStyles="xl:hidden z-70" linkStyles="uppercase" />
            </div>
        </div>
    </header>
  )
}

export default Header