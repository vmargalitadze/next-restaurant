"use client"
import Image from "next/image"
import Link from "next/link"
import {IoIosArrowRoundForward} from 'react-icons/io'
import {motion} from 'framer-motion'
import {fadeIn} from '@/components/variants'
import { Lobster } from 'next/font/google'
const lobster = Lobster({
	weight: ['400', ],
    style: ['normal',],
    subsets: ['latin'],
    display: 'swap',
})
const menu = [
    {
      img:'/menu/photo-1600028068383-ea11a7a101f3.avif',
      title:'Margherita Pizza',
      price:'12.00',
      id:'1'
    },

    {
        img:'/menu/pinar-kucuk-Ae7jQFDTPk4-unsplash.jpg',
        title:'Neapolitan Pizza',
        price:'10',
        id:'2'
      },

      {
        img:'/menu/shayan-ramesht-exSEmuA7R7k-unsplash.jpg',
        title:'Prosciutto e funghi',
        price:'17',
        id:'3'
      },

      {
        img:'/menu/peter-bravo-de-los-rios-OklpRh8-Sns-unsplash.jpg',
        title:'Diavola Pizza',
        price:'13',
        id:'4'
      },
  ]
function Menu() {
  return (
    <section className="bg-[url('/photo-1513104890138-7c749659a591.avif')] bg-fixed sm:pt-[100px] mt-[150px] lg:pb-[70px] sm:pb-10 pb-5 relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-black-blur after:opacity-100 after:w-full after:h-full after:top-0 py-12 xl:py-24 after:left-0 after:backdrop-blur-[6px] 2xl:mx-[100px] 2xl:rounded-[30px] overflow-hidden" id="menu">
    <div className="container mx-auto">
        <motion.div
         variants={fadeIn('left', 0.3)}
         initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.2}}
        className="max-w-[570px]  mx-auto text-center">
            <h2 className={`${lobster.className} text-white`} >Menu</h2>
            <Link className="text-white justify-center flex  items-center mb-16" href='/menu' >View All <IoIosArrowRoundForward className="text-3xl "/> </Link>
        </motion.div>

        <motion.div
         variants={fadeIn('up', 0.4)}
         initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.2}}
        className="grid grid-cols-1 md:grid-cols-3 md:gap-[15px] xl:grid-cols-4 gap-[30px] ">
    {menu.map((f) => {
        return (
          <div key={f.id} className="max-w-[270px] mx-auto xl:mx-0 group bg-white shadow-xl">
            <div className="max-w-[270px] ">
                <div className=" bg-white rounded-[10px] xl:p-[15px] p-2.5 mb-[30px] flex flex-col relative overflow-hidden z-[1] style-5">
                    <div className=" mb-[15px]">
                        <div className="price mb-[5px] flex justify-between items-center">
                            <h6 className="text-[#000]"> {f.title} </h6>
                            <h6 className="text-primary">${f.price}  </h6>
                        </div>
                    </div>
                    <div className="rounded-[10px] mt-auto w-full h-full overflow-hidden relative">
                        <Image width={360} height={340} src={f.img} alt="/" className="block w-full h-full group-hover:scale-110 transition-all duration-300" />
                    </div>
                </div>
            </div>
          </div>
        );
    })}
        </motion.div>

    </div>
</section>

  )
}

export default Menu