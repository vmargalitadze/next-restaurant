"use client"
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
function Footer() {
  return (
    <footer className='bg-footer  bg-cover bg-no-repeat pt-16'>

   <div className="container mx-auto">

    <div className="flex flex-col justify-between xl:flex-row ">

   <div className="w-[300px] mb-8 xl:mb-0 ">
    <Link href='/' >
    
    <Image src='/logo.svg' alt='footer' width={90} height={36} />
    </Link>
   </div>

    <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16  ">

      <div>
        <h4 className="font-semibold mb-5 text-white">Blog</h4>
        <ul className='flex flex-col gap-y-6 text-sm'>
          <li> <Link href='/' >Sit pellentesque neque egestas quis dolor, sit</Link> </li>

          <li> <Link href='/' >Arcu et tincidunt dictum nunc ut nisi, dolor euismod</Link> </li>

          <li> <Link href='/' >Tempor, volutpat nulla sed posuere orci ac diam integer</Link> </li>

          
          <li> <Link href='/' >Ultrices consectetur orci ultrices viverra mauris laoreet tincidunt at</Link> </li>
        </ul>
      </div>


      
      <div>
        <h4 className="font-semibold mb-5 text-white">Contact info</h4>
        <ul className='flex text-white flex-col gap-y-6 text-sm'>
  <li><strong>Phone:</strong> <a href='tel:+1234567890'>+995 599 11 22 33</a></li>
  <li><strong>Email:</strong> <a href='mailto:info@example.com'>info@example.com</a></li>
  <li><strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM</li>
  <li><strong>Location:</strong> 123 Main Street, City, Country</li>
</ul>
      </div>

      <div>
        <h4 className="font-semibold mb-5 text-white">Social Media</h4>
        <ul className='flex flex-col gap-y-6 text-sm'>
          <li> <Link href='/' >Facebook</Link> </li>

          <li> <Link href='/' >Instagram</Link> </li>

          <li> <Link href='/' >Tik Tok</Link> </li>

          
        
        </ul>
      </div>

    </div>

    </div>

   </div>

    </footer>
  )
}

export default Footer