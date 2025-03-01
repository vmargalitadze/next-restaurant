"use client"
import Image from 'next/image'
import React from 'react'
import './menu.css'
import Link from 'next/link'
import {FaArrowRight,} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {fadeIn} from '@/components/variants'
function page() {
  return (
    <>
    
    <section className="  flex flex-col">
  <div className="flex bg-no-repeat  pb-16 flex-col relative w-full   ">
    <Image 
      src="/menu/photo-1593504049359-74330189a345.avif" 
      alt="menu-bg" 
      fill 
      className="object-cover"
    />
    <div className="overlay absolute inset-0 bg-black/30"></div>

    <div className="absolute   flex-col inset-0 flex items-center mt-[250px] text-center">
      <div className="container ">
        <motion.h2
         variants={fadeIn('down', 0.6)}
         initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.4}}
        className="relative text-center tst-suptitle tst-suptitle-center 
          before:absolute before:left-1/2 before:-translate-x-1/2 
          before:-top-[20px] before:h-[4px] before:w-[50px] 
          before:bg-[#f39c12] before:rounded-md text-white text-4xl font-bold">
          Menu
        </motion.h2>

        <motion.h1
         variants={fadeIn('down', 0.4)}
         initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.4}}
        className='text-white mb-[30px]'> Welcome to Our Pizzeria</motion.h1>

        <motion.div
         variants={fadeIn('down', 0.2)}
         initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.4}}
        className="relative mb-[150px] gap-x-5 uppercase inline-flex bg-orange m-0 text-[12px] px-[30px] h-[50px] rounded-md items-center">
          <Link href="/" className="relative flex items-center gap-2">
            Home
          </Link>
          <FaArrowRight />
          <span className="relative opacity-[0.5]">Menu</span>
        </motion.div>

      </div>
    </div>
  <motion.div
   variants={fadeIn('right', 0.2)}
   initial='hidden' whileInView={'show'}  viewport={{ once: true, amount: 0.4 }}
  className="container mt-[650px] relative  "> 
      <div className="grid  grid-cols-12 gap-x-4 lg:gap-x-[30px] xl:gap-x-[94px]">
        <div
        
        className="col-span-12 mx-auto text-center">
          <h2 className="subtitle font-poppins font-normal text-International-Orange flex items-center text-white justify-center gap-[15px] mb-[19px]">
            <span>
              <svg width="13" height="30" viewBox="0 0 13 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02392 28.6457L7.97935 17.6722C9.169 17.5219 10.2426 17.1711 11.1421 16.6701C12.3607 15.9518 13.0281 15.0165 12.9991 14.0144L12.9701 11.2919L12.4768 0.418535C12.4478 0.201403 12.1286 0.000973324 11.7224 0.000973324C11.2872 -0.0157292 10.939 0.184701 10.91 0.435238L10.5908 10.5903L7.66018 10.6071L7.25396 0.435238C7.22494 0.201404 6.87675 0.000973324 6.47053 0.000973324C6.00628 -0.0157292 5.62907 0.184701 5.62907 0.451941L5.3099 10.6071L2.3793 10.6238L1.94406 0.451941C1.91504 0.234808 1.59587 0.0343784 1.18965 0.0343784C0.754411 0.0176759 0.40622 0.218106 0.377205 0.468643L0 11.3253L0.0290154 14.0645C0.0290154 15.8349 2.23422 17.3215 5.1358 17.6889L4.43942 28.6624C4.43942 28.6847 4.43942 28.707 4.43942 28.7292C4.49745 29.4475 5.54202 30.032 6.81872 29.9986C8.0664 29.9819 9.08195 29.3639 9.02392 28.6457Z" fill="#F2994a"></path>
              </svg>
            </span>
           EAT PRAY LOVE
          </h2>
          <h2 className=" text-white mt-14 mb-12">
         Pizza
          </h2>
        </div>

        <div className="col-span-12 lg:col-span-6">
  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Margherita Pizza
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Tomato sauce, fresh mozzarella, basil, extra virgin olive oil.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$12</span>
    </p>
  </div>

  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
    Neapolitan Pizza
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Tomato sauce, garlic, oregano, extra virgin olive oil.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$10</span>
    </p>
  </div>

  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Quattro Formaggi
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Mozzarella, gorgonzola, fontina, parmesan cheese.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$14</span>
    </p>
  </div>

  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Capricciosa Pizza
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Tomato sauce, mozzarella, artichokes, ham, mushrooms, black olives.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$15</span>
    </p>
  </div>
</div>

<div className="col-span-12 lg:col-span-6">
  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Diavola Pizza
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Tomato sauce, mozzarella, spicy salami, chili flakes.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$13</span>
    </p>
  </div>

  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Prosciutto e Funghi
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Tomato sauce, mozzarella, ham, mushrooms.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$14</span>
    </p>
  </div>

  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Napoli Pizza
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Tomato sauce, mozzarella, anchovies, capers, olives.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$13</span>
    </p>
  </div>

  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Quattro Stagioni
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Tomato sauce, mozzarella, artichokes, mushrooms, ham, olives.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$16</span>
    </p>
  </div>
</div>


      </div>



        
    </motion.div>

    <motion.div
      variants={fadeIn('left', 0.4)}
      initial='hidden' whileInView={'show'} viewport={{once: true, amount:0.4}}
    className="container relative">
  <div className="grid grid-cols-12 gap-x-4 lg:gap-x-[30px] xl:gap-x-[94px]">
    <div className="col-span-12 mx-auto text-center">
      <h2 className="text-white mt-14 mb-12">Popular Pastas :</h2>
    </div>


    <div className="col-span-12 lg:col-span-6">
      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Spaghetti Aglio e Olio
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Spaghetti with garlic, olive oil, chili flakes, and parsley.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$14</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Lasagna alla Bolognese
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Layers of pasta, meat sauce, béchamel, and parmesan cheese.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$16</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Fettuccine Alfredo
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Creamy alfredo sauce with fettuccine pasta.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$18</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Penne Arrabbiata
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Penne pasta with a spicy tomato sauce, garlic, and chili peppers.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$12</span>
        </p>
      </div>
    </div>


    <div className="col-span-12 lg:col-span-6">
      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Tagliatelle al Pesto
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Fresh tagliatelle pasta with pesto sauce made from basil, garlic, and pine nuts.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$15</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Gnocchi al Pomodoro
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Potato gnocchi with a rich tomato sauce, basil, and mozzarella.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$13</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Ravioli Ricotta e Spinaci
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Homemade ravioli stuffed with ricotta cheese and spinach in a butter sage sauce.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$17</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Linguine alle Vongole
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Linguine pasta with fresh clams, garlic, white wine, and parsley.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$19</span>
        </p>
      </div>
    </div>
  </div>
</motion.div>


    
    <motion.div
      variants={fadeIn('right', 0.6)}
   initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.4}}
     className="container  relative  "> 
      <div className="grid  grid-cols-12 gap-x-4 lg:gap-x-[30px] xl:gap-x-[94px]">
        <div className="col-span-12 mx-auto text-center">
       
          <h2 className=" text-white mt-14 mb-12">
          Appetizers :
          </h2>
        </div>
<div className="col-span-12 lg:col-span-6">
  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Bruschetta al Pomodoro
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Toasted bread with garlic, tomatoes, basil, and olive oil.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$8</span>
    </p>
  </div>

  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Caprese Salad
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Fresh mozzarella, tomatoes, basil, olive oil, and balsamic vinegar.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$9</span>
    </p>
  </div>

  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Carpaccio di Manzo
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Thinly sliced raw beef, arugula, parmesan, and olive oil.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$12</span>
    </p>
  </div>


</div>

<div className="col-span-12 lg:col-span-6">
  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Frittura di Calamari
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Fried squid served with a lemon wedge and marinara sauce.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$11</span>
    </p>
  </div>

  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Polpette alla Napoletana
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Italian meatballs in a rich tomato sauce.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$9</span>
    </p>
  </div>

  <div className="mb-6">
    <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
      Insalata di Rucola
    </h4>
    <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
      Arugula, cherry tomatoes, parmesan, and balsamic dressing.
    </p>
    <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
      <span className="text-white bg-Deep-Teal relative pl-2">$7</span>
    </p>
  </div>
</div>



      </div>

 

        
    </motion.div>

    <motion.div
      variants={fadeIn('left', 0.8)}
   initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.4}}
     className="container relative">
  <div className="grid grid-cols-12 gap-x-4 lg:gap-x-[30px] xl:gap-x-[94px]">
    <div className="col-span-12 mx-auto text-center">
      <h2 className="text-white mt-14 mb-12">Alcoholic Drinks:</h2>
    </div>

    <div className="col-span-12 lg:col-span-6">
      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Red Wine (Cabernet Sauvignon)
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Bold and full-bodied red wine with rich flavors of dark fruits.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$18</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          White Wine (Chardonnay)
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Crisp and refreshing white wine with hints of citrus and oak.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$16</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Beer (Pale Ale)
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Refreshing beer with a hoppy and slightly bitter taste.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$6</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Beer (Lager)
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Light and smooth beer with a crisp, refreshing taste.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$5</span>
        </p>
      </div>
    </div>

    <div className="col-span-12 lg:col-span-6">
      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Rose Wine (Pinot Grigio)
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          A light, refreshing rosé with notes of red berries and citrus.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$15</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Beer (IPA)
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Strong hoppy flavor with fruity and floral notes.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$7</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Sparkling Wine (Prosecco)
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Light and bubbly with notes of green apple and pear.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$19</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Beer (Stout)
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Dark and rich beer with flavors of coffee and chocolate.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$8</span>
        </p>
      </div>
    </div>
  </div>
</motion.div>


<motion.div
  variants={fadeIn('up', 1)}
   initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.4}}
 className="container relative">
  <div className="grid grid-cols-12 gap-x-4 lg:gap-x-[30px] xl:gap-x-[94px]">
    <div className="col-span-12 mx-auto text-center">
      <h2 className="text-white mt-14 mb-12">Non-Alcoholic Drinks:</h2>
    </div>

    <div className="col-span-12 lg:col-span-6">
      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Fresh Lemonade
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Refreshing lemonade made with fresh lemons and a touch of sugar.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$5</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Iced Tea
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Sweetened iced tea served chilled for a refreshing experience.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$4</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Virgin Mojito
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          A refreshing minty drink with lime, sugar, and soda water.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$6</span>
        </p>
      </div>
    </div>

    <div className="col-span-12 lg:col-span-6">
      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Smoothie (Strawberry)
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Fresh strawberry smoothie with yogurt and a hint of honey.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$7</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Fresh Juice (Orange)
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Freshly squeezed orange juice for a natural, sweet drink.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$5</span>
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-white mb-[15px]">
          Apple Cider
        </h4>
        <p className="font-plus-jakarta-sans font-normal text-base leading-[20px] text-white mb-[5px]">
          Crisp apple cider with a subtle tangy finish.
        </p>
        <p className="relative font-plus-jakarta-sans font-semibold lg:text-[20px] xl:text-[24px] leading-[30px] text-International-Orange text-right before:dashed-border">
          <span className="text-white bg-Deep-Teal relative pl-2">$5</span>
        </p>
      </div>
    </div>
  </div>
</motion.div>

  </div>
</section>











    </>

  )
}

export default page