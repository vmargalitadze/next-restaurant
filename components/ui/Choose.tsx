"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { fadeIn } from "../variants"


const menu = [
    {
      img:'/why/1.svg',
      title:'Menu for every taste',
      text:'Dolor sit amet, consectetur adipisicing elit et molestias possimus'
    },

    {
        img:'/why/2.svg',
        title:'Always fresh ingredients',
        text:'Dolor sit amet, consectetur adipisicing elit et molestias possimus'
      },

      {
        img:'/why/3.svg',
        title:'Experienced chefs',
         text:'Dolor sit amet, consectetur adipisicing elit et molestias possimus'
      },

  
  ]

function Choose() {
  return (
<section className="flex flex-col py-12 xl:py-24">
    <div className="flex-col inset-0 flex items-center  text-center">
    <div className="container ">
        <motion.h2
         variants={fadeIn('down', 0.6)}
         initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.4}}
        className="relative mb-[60px] text-center tst-suptitle tst-suptitle-center 
          before:absolute before:left-1/2 before:-translate-x-1/2 
          before:-top-[20px] before:h-[4px] before:w-[50px] 
          before:bg-[#f39c12] before:rounded-md text-black text-4xl font-bold">
         Why people choose us?
        </motion.h2>

      <motion.div
       variants={fadeIn('down', 0.8)}
       initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.4}}
      className="grid grid-cols-1 mx-auto md:grid-cols-3 md:gap-[15px]  gap-[30px]">
          {menu.map( (f, i) => {
               return <div key={i} className="text-center items-center mx-auto xl:mx-0 group bg-white  " >
                   <div className="overflow-hidden ">
                   <Image 
         className="mb-[30px] mx-auto items-center " 
         alt="food" 
         width={70} 
         height={50} 
         src={f.img} 
       />
       
                   </div>
       
                   <div className="mx-[14px] pt-[20px] pb-[28px] px-[30px]  ">
                   <h3 className="font-poppins   mb-[30px] ">{f.title}  </h3>
               
                 
                   <div className="text-[17px] color-[rgba(26, 47, 51, .7)] "> {f.text} </div>
       
               </div>
               </div>
           } )  }
      </motion.div>

 

      </div>
    </div>


</section>
  )
}

export default Choose