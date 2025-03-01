"use client"


import {motion} from 'framer-motion'
import {fadeIn} from '@/components/variants'
import ReservationForm from './ReservationForm'
function Reservation() {
  return (
    <motion.section
    variants={fadeIn('left', 0.2)}
    initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.2}}
    id='reservation' className="xl:my-32 xl:h-[1020px] xl:flex xl:flex-col xl:justify-end xl:items-end  xl:bg-reservation xl:bg-no-repeat ">
        <motion.div
         variants={fadeIn('left', 0.4)}
         initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.2}}
        className="bg-black p-8 w-full xl:max-w-[869px] min-h-[518px] md:p-14 xl:p-16  ">

        <h2 className="text-white">book a table</h2>
    <ReservationForm />
        </motion.div>

    </motion.section>
  )
}

export default Reservation