
import React from 'react'
import {Link } from 'react-scroll'
const links = [
    {
        path:'home', name:'home', offset:-50
    },

    {
        path:'menu', name:'menu', offset:-50
    },

    {
        path:'about', name:'about', offset:-150
    },

    {
        path:'contact', name:'contact', offset:0
    },
]

 function Nav({containerStyles, linkStyles}:{containerStyles:string, linkStyles:string } ) {
  
  return (
  <nav className={` ${containerStyles} `}>
    {links.map( (l, i) => {
        return <Link offset={l.offset} duration={500}
        className={` ${linkStyles} `}
        smooth={true} key={i} spy={true} to={l.path}> {l.name} </Link>
    } )}
  </nav>
  )
}

export default Nav