import React from 'react'
import coinline from '../../../assets/images/coinline.svg'
import coinpadma from '../../../assets/images/coinpadma.svg'
import { motion } from "framer-motion"

function CoinageSection() {
    // Reusable animation props
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const fadeInLeft = {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const fadeInRight = {
        initial: { opacity: 0, x: 30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <section className="bg-white font-helvetica md:py-16 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex md:flex-row flex-col w-full gap-12 md:gap-16 md:pr-10">
                
                {/* Left Column: Text Content */}
                <div className="flex flex-col md:items-start items-center md:text-left text-center md:w-[50%] w-full">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-playfair font-extrabold text-dark-red tracking-widest"
                        {...fadeInLeft}
                    >
                        Coinage Of The Name
                    </motion.h2>
                    
                    <motion.div 
                        className="my-4 pl-4"
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.2 }}
                    >
                        <img src={coinline} alt="coinline" className='w-auto h-auto pl-4' />
                    </motion.div>
                    
                    <motion.p 
                        className="max-w-xl font-helvetica font-sm leading-loose md:text-base tracking-widest"
                        {...fadeInLeft}
                        transition={{ ...fadeInLeft.transition, delay: 0.4 }}
                    >
                        'PADMA' as the name sounds, is a concept closely associated with the vision of lotus wisdom, aiming the blooming and liberation of knowledge happen and traverse through different somatic practices of body-memory.
                    </motion.p>
                </div>

                {/* Right Column: Logo */}
                <motion.div 
                    className="flex justify-center md:w-[50%] w-full"
                    {...fadeInRight}
                    transition={{ ...fadeInRight.transition, delay: 0.3 }}
                >
                    <img src={coinpadma} alt="coinpadma" className='w-auto h-auto' />
                </motion.div>
            </div>
        </section>
    )
}

export default CoinageSection