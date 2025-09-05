import React from 'react'
import aboutline from '../../../assets/images/aboutline.svg'
import { motion } from "framer-motion"

function About() {
    const padmaItems = [
        { letter: 'P', word: 'PRESENCE' },
        { letter: 'A', word: 'AWARENESS' },
        { letter: 'D', word: 'DHARMA' },
        { letter: 'M', word: 'MOVEMENT' },
        { letter: 'A', word: 'AWAKENING' },
    ];

    // Animation variants for different elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const circleVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0,
            rotate: -180
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "backOut"
            }
        }
    };

    return (
        <section className="bg-white font-sans py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="About">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Main Title with Decorative Elements */}
                <motion.h2 
                    className="text-2xl md:text-3xl font-playfair font-extrabold text-dark-red tracking-widest text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    About us
                </motion.h2>
                
                <motion.div 
                    className=""
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img src={aboutline} alt='aboutline' className='w-auto h-auto' />
                </motion.div>
                
                {/* P.A.D.M.A. Acronym Section */}
                <motion.div 
                    className="flex md:flex-row flex-col justify-center md:items-start items-center gap-6 md:gap-8 lg:gap-30 my-8 md:my-12 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {padmaItems.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="flex flex-col items-center text-center space-y-3 w-32"
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.7 }
                            }}
                        >
                            <motion.div 
                                className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 shadow-sm"
                                variants={circleVariants}
                                whileHover={{
                                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.span 
                                    className="text-7xl font-bold text-dark-red font-playfair"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                >
                                    {item.letter}
                                </motion.span>
                            </motion.div>
                            <motion.p 
                                className="text-base font-semibold uppercase tracking-widest text-dark-red font-playfair"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                            >
                                {item.word}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* Description Paragraph */}
                <motion.p 
                    className="max-w-7xl font-helvetica mx-auto font-sm leading-loose md:text-base text-justify tracking-widest"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Padma is a knowledge-sharing and creation domain that leverages art, culture, and ancient wisdom to empower individuals and communities. Born out of the pandemic's challenges, padma has grown into a vibrant platform, connecting people worldwide through its multifaceted approach. Guided by the principles of Presence, Awareness, Dharma, Movement, and Awakening (P.A.D.M.A.), padma fosters a deeper understanding of oneself and the world, promoting holistic growth and transformation. Through education, artistic expression, and healing, padma aims to liberate knowledge and promote positive change, inspiring individuals to bloom into their full potential.
                </motion.p>
            </div>
        </section>
    )
}

export default About