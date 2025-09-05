import React from 'react'
import { motion } from 'framer-motion'
import coursebg from '../../../assets/images/coursebg.svg'
import lyn from '../../../assets/images/lyn.svg'
import star from '../../../assets/images/star.svg'

// --- Data for the Courses ---
const courseData = [
    {
        number: 1,
        title: "Readying the spiritual dancer",
        details: "Readying the <br/> Spiritual Dancer<br/>  Credit: 2 Total Hours:<br/>  30 /PG/ <br/> Prerequisite: <br/> Trained Dancer"
    },
    {
        number: 2,
        title: "Healing through rasa dynamics",
        details: "Healing through <br/> Rasa Dynamics <br/> Credit: 2 Total Hours:<br/> 30 PG/ No<br/> Prerequisite"
    },
    {
        number: 3,
        title: "Embodied empathy through vedic wisdom",
        details: "Embodied Empathy <br/> through Vedic<br/> Wisdom Credit: 1 <br/>Total Hours: 15 UG/<br/> PG No Prerequisite"
    },
    {
        number: 4,
        title: "Dharmic spatial awareness for modern life",
        details: "Dharmic Spatial<br/> Awareness for<br/> Modern Life Credit:<br/> 1 Total Hours: 15 UG/<br/> PG No Prerequisite"
    }
];

// Reusable animation props
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

const cardHover = {
    whileHover: { 
        y: -15, 
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
    }
};

const NumberBurstIcon = ({ number }) => (
    <motion.div 
        className="absolute top-4 left-1 w-20 h-20"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.5 } }}
    >
        <img src={star} alt={`Course ${number}`} className="w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl font-playfair pb-3">
            {number}
        </div>
    </motion.div>
);

const CourseCard = ({ number, details }) => (
    <motion.div
        className="relative w-full aspect-[3.5/4]"
        {...fadeInUp}
        {...cardHover}
        whileInView={{
            ...fadeInUp.whileInView,
            transition: { ...fadeInUp.transition, delay: number * 0.1 }
        }}
    >
        <img 
            src={coursebg}
            alt="Course background" 
            className="absolute inset-0 w-full h-full object-contain"
        />

        <NumberBurstIcon number={number} />

        <motion.div 
            className="absolute inset-0 flex flex-col justify-center items-center p-6 text-dark-red pt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: number * 0.1 + 0.3, duration: 0.5 }}
        >
            <p
                className="text-base leading-loose tracking-widest text-dark-red/80 font-helvetica max-w-xs pt-2"
                dangerouslySetInnerHTML={{ __html: details }}
            />
        </motion.div>
    </motion.div>
);

function CourseSection() {
    return (
        <section className="bg-[var(--background)] font-helvetica py-6 md:py-32 px-4 sm:px-6 lg:px-8" id="Course">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Main Title */}
                <motion.h2 
                    className="text-2xl md:text-3xl font-playfair font-extrabold text-dark-red tracking-widest text-center"
                    {...fadeInUp}
                >
                    Course Sample
                </motion.h2>
                
                <motion.div 
                    className=""
                    {...fadeInUp}
                    transition={{ ...fadeInUp.transition, delay: 0.2 }}
                >
                    <img src={lyn} alt='aboutline' className='w-auto h-auto' />
                </motion.div>

                {/* Responsive Grid */}
                <motion.div 
                    className="md:mt-16 mt-9 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 md:px-0 px-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                >
                    {courseData.map((course) => (
                        <div key={course.number}>
                            <CourseCard {...course} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default CourseSection