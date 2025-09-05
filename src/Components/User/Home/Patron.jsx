import React from 'react'
import { motion } from 'framer-motion'
import patronlinee from '../../../assets/images/patronlinee.svg'
import patroncircle from '../../../assets/images/patroncircle.png'

// Reusable animation props
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
};

// Animated Mandala with continuous rotation and hover effects
const MandalaIcon = ({ index }) => (
    <motion.div 
        className="md:w-36 w-28 h-28 opacity-100"
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
            duration: 0.8, 
            delay: index * 0.1,
            ease: "backOut",
        }}
    >
        <img src={patroncircle} alt="Mandala" className="w-full h-full object-contain" />
    </motion.div>
);

function Patron() {
    return (
        <section className="bg-white font-helvetica py-10 md:py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                
                {/* Main Title */}
                <motion.h2 
                    className="text-2xl md:text-3xl font-playfair font-extrabold text-dark-red tracking-widest text-center mb-2"
                    {...fadeInUp}
                >
                    Patron
                </motion.h2>
                
                <motion.div 
                    className="flex justify-center items-center"
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.2 }}
                >
                    <img src={patronlinee} alt='pline' className='w-auto h-auto' />
                </motion.div>

                {/* Text Content */}
                <motion.div 
                    className="mt-8 font-helvetica font-sm font-light leading-loose md:text-base tracking-widest"
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.4 }}
                >
                    <p>
                        Kalamandalam M.P.S. Namboodiri, a distinguished Kathakali scholar, performer, and teacher, serves as a patron of Padma. With a remarkable career spanning decades, he joined Kerala Kalamandalam's faculty in 1968 and retired as Principal in 1998. He was later reappointed as Dean of the Department of Kathakali in 2007. Dr.Namboodiri's expertise in Kathakali is evident in his co-authored book,"Kathakaliyude Rangapadha Charithram," which won the prestigious Kalamandalam award in 2007.
                    </p>
                    <br />
                    <p>
                       His outstanding contributions to Kathakali earned him recognition from the Government of India's National Academy for Music, Dance, and Drama in 2013. As a patron of Padma, Dr. Namboodiri brings his wealth of knowledge and experience, guiding the organization in its mission to promote art, culture, and holistic well-being.
                    </p>
                </motion.div>
            </div>

            {/* Desktop Decorative Mandala Row */}
            <motion.div 
                className="hidden mt-16 w-full md:flex justify-center items-center flex-wrap gap-x-2 gap-y-2"
                {...staggerContainer}
                transition={{ ...staggerContainer.transition, delayChildren: 0.6 }}
            >
                {[...Array(7)].map((_, i) => (
                    <MandalaIcon key={i} index={i} />
                ))}
            </motion.div>

            {/* Mobile Decorative Mandala Row */}
            <motion.div 
                className="md:hidden mt-10 w-full flex justify-center items-center flex-wrap gap-x-2"
                {...staggerContainer}
                transition={{ ...staggerContainer.transition, delayChildren: 0.6 }}
            >
                {[...Array(3)].map((_, i) => (
                    <MandalaIcon key={i} index={i} />
                ))}
            </motion.div>
        </section>
    )
}

export default Patron