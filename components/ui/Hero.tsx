"use client"
import {Link } from 'react-scroll'
import {motion} from 'framer-motion'
import {fadeIn} from '@/components/variants'
import { Button } from "./button"

function Hero() {
  return (
    <section className="bg-hero bg-no-repeat relative  xl:h-[800px]
    pb-32 xl:py-0 py-40" id="home">
         <div className="overlay absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto">
            <div className="flex items-center xl:h-[960px]">
                <div className="w-full z-20  text-center t">
                    <motion.h1 
                    variants={fadeIn('down', 0.2)}
                    initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.4}}
                    className="text-white mb-7 uppercase ">

                    Only quality food
                    </motion.h1>
                 
                    <motion.p
                     variants={fadeIn('down', 0.4)}
                     initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.4}}
                    className="text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0">
                    don’t listen to people who tell you you can’t eat a whole pizza, you don’t need that kind of negativity in your life
                    </motion.p>
                    <motion.div
                     variants={fadeIn('down', 0.6)}
                     initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.4}}
                    className="">
                        <Button > <Link offset={-50} duration={500}
                                className="hidden  xl:flex gap-x-12 text-white"
                                smooth={true} spy={true} to='reservation'> Book a table </Link></Button>
                    </motion.div>
                </div>

            </div>

            
        </div>


    </section>
  )
}

export default Hero