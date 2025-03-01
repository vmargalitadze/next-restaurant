"use client"
import Image from 'next/image'
import {motion} from 'framer-motion'
import {fadeIn} from '@/components/variants'
import { Button } from './button'
import Link from 'next/link'

function About() {
  return (
    <section className='grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center ' id='about' >
        <motion.div 
         variants={fadeIn('right', 0.2)}
         initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.2}}
        className='xl:p-[135px]'>
            <h1 className='mb-9'> Let&#39;s Talk About  
              <span className='text-[#F2994a] '>

               W&#39;
              </span>
                 Food </h1>
            <p className='mb-8'>Mauris nam et ipsum ipsum in. 
                Risus nullam in sit mi est justo at fringilla.
                 Consequat ac fringilla quis enim, sit ipsum. Laoreet eget metus morbi convallis gravida elementum facilisis.
                  Neque enim quis fusce amet. Pellentesque netus vel eu  </p>
    <p className='mb-10'>posuere ultrices facilisi. Senectus velit lobortis velit arcu varius lectus mattis. Dictum aenean duis aliquet Tortor purus egestas urna scelerisque vel ornare lectus ultricies. Nisi, eu ut ultricies enim enim amet porttitor. 
       
       </p>

<Button className='mb-9'>
  <Link href='/us' > 
  
   Read More
  </Link>
   </Button>
        </motion.div>
        <motion.div 
         variants={fadeIn('up', 0.4)}
         initial='hidden' whileInView={'show'} viewport={{once:true, amount:0.2}}
        className="">
            <Image className='flex' src='/about/img.png' width={705} height={771 } alt='about-image' />
        </motion.div>
    </section>
  )
}

export default About