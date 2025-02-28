"use client"
import Image from "next/image"
import Link from "next/link"
import {IoIosArrowRoundForward} from 'react-icons/io'
import {motion} from 'framer-motion'
import {fadeIn} from '@/components/variants'

const menu = [
    {
      img:'/menu/margherita.jpg',
      title:'Margherita Pizza',
      price:'12.00'
    },

    {
        img:'/menu/neapolitan.jpg',
        title:'Neapolitan Pizza',
        price:'10'
      },

      {
        img:'/menu/prosciutto_funghi_wikimedia_commons.jpg',
        title:'Prosciutto e funghi',
        price:'17'
      },

      {
        img:'/menu/diavola_unsplash.jpg',
        title:'Diavola Pizza',
        price:'15'
      },
  ]
function Menu() {
  return (
   <section className="relative py-12 xl:py-24 bg-menu" id="menu">
    <div className="container mx-auto">
        <motion.div
         variants={fadeIn('left', 0.3)}
         initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.2}}
        className="max-w-[570px]  mx-auto text-center">
            <h2 className="mb-3 ">Favourite menu</h2>
            <Link className="text-green justify-center flex  items-center mb-16" href='/menu' >View All <IoIosArrowRoundForward className="text-3xl "/> </Link>
        </motion.div>

        <motion.div
         variants={fadeIn('upt', 0.4)}
         initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.2}}
        className="grid grid-cols-1 md:grid-cols-3 md:gap-[15px] xl:grid-cols-4 gap-[30px] ">
    {menu.map( (f, i) => {
        return <div key={i} className="max-w-[270px] mx-auto xl:mx-0 group bg-white shadow-xl " >
            <div className="overflow-hidden ">
            <Image 
  className="group-hover:scale-110 transition-all duration-300 object-cover w-[270px] h-[270px] mx-auto" 
  alt="food" 
  width={270} 
  height={270} 
  src={f.img} 
/>

            </div>

            <div className="mx-[14px] pt-[20px] pb-[28px] px-[30px]  ">
            <h3 className="font-poppins  ">{f.title}  </h3>
        

            <div className="text-xl font-poppins text-orange"> {f.price} ₾</div>

        </div>
        </div>
    } )  }
        </motion.div>

    </div>
   </section>
  )
}

export default Menu