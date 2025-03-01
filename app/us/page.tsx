"use client"
import React from 'react'
import './us.css'
import {motion} from 'framer-motion'
import {fadeIn} from '@/components/variants'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

const cooks = [
  {
    img:'/cooks/photo-1541614101331-1a5a3a194e92.avif',
    name:'john',
    text:'Cook'
  },

  {
    img:'/cooks/photo-1581349485608-9469926a8e5e.avif',
    name:'Max',
    text:'Cook'
  },

  {
    img:'/cooks/photo-1625631980722-b728f9cf1036.avif',
    name:'Sophi',
    text:'Cook'
  },

  {
    img:'/cooks/photo-1622413472825-0857e054ea39.avif',
    name:'monica',
    text:'Cook'
  },
]

function page() {
  return (
    <section className="bgimage flex flex-col relative">
    <div className="flex bg-no-repeat pb-16 flex-col relative w-full h-[50vh]">
   
      <div className="absolute flex flex-col inset-0 items-center mt-[250px] text-center">
        <div className="container">
    
  
          <motion.h1
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="text-white mb-[30px]"
          >
            Welcome to Our Pizzeria
          </motion.h1>
  
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="relative mb-[150px] gap-x-5 uppercase inline-flex bg-orange m-0 text-[12px] px-[30px] h-[50px] rounded-md items-center"
          >
            <Link href="/" className="relative flex items-center gap-2">
              Home
            </Link>
            <FaArrowRight />
            <span className="relative opacity-[0.5]">About Us</span>
          </motion.div>
        </div>
      </div>
    </div>
  

    <div className="relative  mt-[150px] lg:mt-[250px] z-10 bg-white py-16">
    <div className="container">
    <div className="grid lg:grid-cols-2 lg:mt-[200px]  mb-[200px] grid-cols-1 gap-12 items-center">
      
      <div className="lg:text-start text-center">
        <motion.h2
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="lg:text-6xl/[60px] md:text-4xl/10 text-3xl/10 font-medium font-cormorant-infant uppercase"
        >
          Our Story
        </motion.h2>

        <motion.p
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="text-lg font-medium text-gray-600 mt-6 leading-relaxed"
        >
          It all started with a passion for authentic flavors and a dream to 
          bring the true taste of Italian pizza to our community. From 
          hand-kneading the dough to selecting the finest ingredients, we 
          remain dedicated to tradition and excellence. Every pizza we make 
          tells a story—one of love, craftsmanship, and heritage.
        </motion.p>

        <motion.p
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          className="text-lg font-medium text-gray-600 mt-4 leading-relaxed"
        >
          What started as a small family-owned kitchen has now become a 
          beloved spot where people gather, share laughter, and create 
          memories over a slice of perfection. Join us in celebrating the 
          art of pizza-making, where tradition meets passion.
        </motion.p>
      </div>

  
      <motion.div
        variants={fadeIn("left", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="flex justify-center"
      >
        <Image
          src="/jason-leung-poI7DelFiVA-unsplash.jpg"
          width={500}
          height={500}
          alt="Our Story - Pizza Making"
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  </div>
      <div className="container">
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-6">
          <div className="lg:text-start text-center">
          <motion.h2
           variants={fadeIn("right", 0.4)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: true, amount: 0.4 }}
          className="lg:text-6xl/[60px] md:text-4xl/10 text-3xl/10 font-medium font-cormorant-infant uppercase">
  “Love is temporary. But pizza? Pizza is forever.”
</motion.h2>
<motion.p 
 variants={fadeIn("right", 0.4)}
 initial="hidden"
 whileInView={"show"}
 viewport={{ once: true, amount: 0.4 }}
className="text-sm font-medium text-orange-500 mt-6">by Vaqsi</motion.p>

          </div>
  
          <div className="lg:col-span-2 lg:text-start text-center">
            <motion.p
             variants={fadeIn("left", 0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: true, amount: 0.4 }}
            className="text-15 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nihil voluptatibus asperiores, a velit sint veniam sit nesciunt quidem eaque aliquam eos dignissimos fugiat optio commodi placeat cum aspernatur. Quaerat libero maiores necessitatibus tempora, qui illo voluptates iusto distinctio nobis.
             Nesciunt pariatur deleniti autem aspernatur praesentium voluptate odio saepe sit.
            </motion.p>
            <motion.p
             variants={fadeIn("left", 0.6)}
             initial="hidden"
             whileInView={"show"}
            className="text-15 font-medium mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem pariatur veniam non laudantium recusandae error dolores temporibus debitis, 
            quam eos dolorem at libero exercitationem porro totam vel sit rem tempore dignissimos vitae reiciendis quidem sunt amet. 
            Porro repellendus hic voluptate qui, esse accusantium vero molestiae at rerum harum nostrum cupiditate.
            </motion.p>
          </div>
        </div>
      </div>
    <div className="lg:mt-[198px] lg:mb-32 mt-36 mb-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-24 items-center">
        <div className="max-w-lg lg:ms-0 mx-auto lg:text-start text-center">
                    <motion.h2
                     variants={fadeIn("right", 0.6)}
                     initial="hidden"
                     whileInView={"show"}
                    className="lg:text-6xl/[60px] md:text-4xl/10 text-3xl/10 font-medium font-cormorant-infant uppercase">
                    A taste of tradition in every bite.</motion.h2>
               
                  
                </div>

                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
               <motion.div
                variants={fadeIn("left", 0.6)}
                initial="hidden"
                whileInView={"show"}
               >

                < Image width={298} height={542} src="/premium_photo-1673439304183-8840bd0dc1bf.jpg" 
                className="md:h-auto rounded-lg shadow-lg " alt="" />
               </motion.div>
                <motion.div
                  variants={fadeIn("left", 0.6)}
                  initial="hidden"
                  whileInView={"show"}
                className="md:-mt-12">
                        <Image width={298} height={542} src="/photo-1572552635104-daf938e0aa1f.avif" 
                        className="md:h-auto  rounded-lg shadow-lg " alt="" />
                    </motion.div>
                </div>

        </div>
      </div>
    </div>

    <div className="lg:mt-[158px] lg:mb-32 my-24">
      <div className="container">
      <div className="max-w-lg lg:ms-0 mx-auto lg:text-start text-center">
                <h2 className="lg:text-6xl/[60px] md:text-4xl/10 text-3xl/10 font-medium font-cormorant-infant uppercase">
                    Our awesome
                    team&apos;s</h2>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-[59px]">

              {cooks.map ( (c, i) => 

<motion.div
initial={{ opacity: 0, filter: "blur(10px)" }}
animate={{ opacity: 1, filter: "blur(0px)" }}
transition={{ duration: 0.6 }}
key={i}
className="group relative mx-auto"
>
<div className="relative inline-block overflow-hidden">
  {/* Image */}
  <Image
    width={373}
    height={400}
    src={c.img}
    className="mx-auto rounded-full h-[400px] w-auto aspect-[4/5] object-cover"
    alt="cookies"
  />

  {/* Hidden text overlay */}
  <div className="absolute rounded-full cursor-pointer inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
    <h3 className="text-2xl font-semibold text-white uppercase">{c.name}</h3>
    <h4 className="text-sm font-medium text-white mt-1">{c.text}</h4>
  </div>
</div>
</motion.div>


               ) }
             
           
              
           
             
          
               
            </div>
      </div>
    </div>

    </div>

  </section>
  
  )
}

export default page