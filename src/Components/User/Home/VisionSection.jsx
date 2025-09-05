import React from 'react'
import guruunderline from '../../../assets/images/guruunderline.svg'
import middle from '../../../assets/images/middle.svg'
import misioneye from '../../../assets/images/misioneye.svg'
import visioneye from '../../../assets/images/visioneye.svg'
import contactflower from '../../../assets/images/contactflower.svg'
import { motion } from "framer-motion"

function VisionSection() {
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

    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <section className="bg-white font-helvetica pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 relative w-full h-full" id="Vision">
            
            {/* Background Decorative Elements */}
            <motion.div 
                className="absolute top-0 -right-7 hidden lg:block opacity-100"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.8 }}
            >
                <img src={contactflower} alt="contactflower" className='w-[90%] h-auto'/>
            </motion.div>

            <motion.div 
                className="absolute -bottom-24 -left-7 hidden lg:block opacity-100"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 1.0 }}
            >
                <img src={contactflower} alt="contactflower" className='w-[90%] h-auto transform scale-x-[-1]'/>
            </motion.div>
            
            <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
                
                {/* Main Title */}
                <motion.h2 
                    className="text-2xl md:text-3xl font-playfair font-extrabold text-dark-red text-center tracking-widest mb-2"
                    {...fadeInUp}
                >
                    "Gurumugha To Contemporaneity"
                </motion.h2>
                
                <motion.div 
                    className="my-4"
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.2 }}
                >
                    <img src={guruunderline} alt="guruunderline" className='w-auto h-auto' />
                </motion.div>

                {/* Content Grid */}
                <div className="mt-16 flex md:flex-row flex-col gap-y-12 md:gap-x-12 items-start w-full">
                    
                    {/* Vision Column */}
                    <motion.div 
                        className="flex flex-col items-start text-left md:w-[30%] w-full gap-4"
                        {...fadeInLeft}
                        transition={{ ...fadeInLeft.transition, delay: 0.4 }}
                    >
                        <img src={visioneye} alt="mission eye" className="w-auto h-auto" />
                        <h3 className="font-playfair text-2xl text-dark-red font-bold">Vision</h3>
                        <p className="font-helvetica font-sm text-black leading-normal md:text-base tracking-widest max-w-xs">
                            Empowering modern minds with timeless wisdom.
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <motion.div 
                        className="hidden lg:flex justify-center items-start md:w-[30%] w-full"
                        {...fadeInUp}
                        transition={{ ...fadeInUp.transition, delay: 0.6 }}
                    >
                        <img src={middle} alt="middle" className='w-auto h-auto' />
                    </motion.div>

                    {/* Mission Column */}
                    <motion.div 
                        className="flex flex-col items-start md:w-[30%] w-full"
                        {...fadeInRight}
                        transition={{ ...fadeInRight.transition, delay: 0.8 }}
                    >
                        <img src={misioneye} alt="mission eye" className='w-auto h-auto' />
                        <h3 className="font-playfair text-2xl text-dark-red font-bold mt-4">Mission</h3>
                        <p className="mt-2 font-helvetica font-sm text-black leading-normal md:text-base t tracking-widest max-w-xs">
                            To bridge ancient knowledge with contemporary relevance, making traditional wisdom accessible, practical, and transformative for a rapidly changing world.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default VisionSection