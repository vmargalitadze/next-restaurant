"use client"
import { useState } from "react"
import {RiMenu2Line, RiHomeFill} from 'react-icons/ri'
import {IoCloseOutline,  } from 'react-icons/io5'
import {BiSolidFoodMenu  } from 'react-icons/bi'
import {FaUsers, FaEnvelope  } from 'react-icons/fa'
import {Link as ScrollLink} from 'react-scroll'
import Image from "next/image"
import Link from "next/link"
import { Button } from "./button"

const links = [
    {
     icon:<RiHomeFill/>,   path:'home', name:'home', offset:0
    },

    {
        icon:<BiSolidFoodMenu/>,    path:'menu', name:'menu', offset:0
    },

    {
        icon:<FaUsers/>,      path:'about', name:'about', offset:0
    },

    {
        icon:<FaEnvelope/>,   path:'contact', name:'contact', offset:0
    },
]

function NavMobile({containerStyles, iconStyles, linkStyles}:{iconStyles:string , containerStyles:string, linkStyles:string }) {
    const [active, setActive] = useState(false)
  return (
   <nav className={` ${containerStyles} `}>
<div onClick={ () => setActive(!active) } className="cursor-pointer outline-none">
    <RiMenu2Line className="text-3xl text-white transition-all duration-200  " />
</div>
<aside  className={` ${active? " right-0" : "-right-full"} bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500 `}>
<div className="flex flex-col items-center justify-between h-full  ">
    <div>
        <div  onClick={ () => setActive(false) } className="cursor-pointer flex items-center justify-center  text-4xl text-white absolute w-10 h-10 top-8 bg-green  left-8 "> <IoCloseOutline /> </div>

        <Link href='/'>
            <Image src='/logo.svg' width={90} height={36} alt="logo" />
            </Link>
    </div>

<div className="flex flex-col gap-y-8 ">

    {links.map( (l, i) => {
            return <ScrollLink offset={l.offset}   duration={500}
            className='flex items-center gap-x-3'
            smooth={false} key={i}  to={l.path}>
                <div className={`${iconStyles}`} >

                 {l.icon}
                </div>

              <div className={` ${linkStyles} `}>
             {l.name}
                
                </div>  
                
            
             
              </ScrollLink>
        } )}
</div>


<div className="">
<ScrollLink to='reservation' smooth offset={-150}>
                <Button variant='orange' size='sm' >Book a Table</Button>
            </ScrollLink>

</div>
</div>
</aside>
   </nav>
  )
}

export default NavMobile