import React from 'react'
import { motion } from 'framer-motion'
import dirline from '../../../assets/images/dirline.svg'
import phdesign from '../../../assets/images/phdesign.svg' //left side of the image frame 
import aswathy from '../../../assets/images/aswathy.png'
import sharon from '../../../assets/images/sharon.png'
import rinu from '../../../assets/images/rinu.png'

// Reusable animation props
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

const fadeInRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

// Animated corner with subtle rotation
const OrnateCorner = ({ className }) => (
    <motion.img 
        src={phdesign} 
        alt="frame" 
        className={`absolute w-12 h-12 ${className}`}
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
    />
);

// Component for the image with its ornate frame
const OrnateImageFrame = ({ imageUrl, altText }) => (
    <motion.div 
        className="relative w-48 h-48 md:w-56 md:h-64 bg-white md:px-0 px-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
    >
        {/* Corner decorations */}
        <OrnateCorner className="-top-7 -left-7" /> 
        <OrnateCorner className="-top-7 -right-7 transform scale-x-[-1]" /> 
        <OrnateCorner className="-bottom-7 -left-7 transform scale-y-[-1]" /> 
        <OrnateCorner className="-bottom-7 -right-7 transform scale-x-[-1] scale-y-[-1]" /> 

        {/* Main image with padding to account for corner decorations */}
        <div className="flex justify-center items-center md:pt-2">
            <img    
                src={imageUrl} 
                alt={altText} 
                className="w-48 h-48 md:w-52 md:h-60"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/224x224/F3EADF/7E221F?text=Image'; }}
            />
        </div>
    </motion.div>
);

// --- Data for Directors ---
const directorsData = [
    {
        name: "Dr. Aswathy Rajan",
        position:"Trustee & Founding Director",
        imageUrl: aswathy,
        bio: [
            "Dr. Aswathy Rajan, Founder director of padma foundation, is spearheading an initiative that integrates art, culture, ancient wisdom, and life practices to promote holistic well-being and positive transformation. With 15+ years of experience in education, research, and performance, dr. rajan leverages her expertise in indian knowledge systems to drive social impact. As assistant professor and assistant director of indian knowledge systems at rajagiri college of social sciences and research guide at kerala kalamandalam, she has established herself as a distinguished dance academician and performer.",
            "Her impressive credentials include authoring three books and over 24 research papers, as well as receiving the prestigious nataraja ramakrishna sharada devi gold medal. Through padma foundation, Dr. Rajan is creating a lasting impact by promoting cultural heritage, fostering well-being, empowering communities to reclaim their roots, and nurturing future leaders. Dr. Rajan's work reflects her commitment to individual and community well-being, inspiring a movement with a profound and lasting impact on society."
        ]
    },
    {
        name: "Sharon Prince",
        position:"Domain Expert Director (Art Outreach)",
        imageUrl: sharon,
        bio: [
            "Sharon Prince is a dedicated social work professional with a postgraduate degree and UGC NET certification. With over a year of teaching experience, she brings expertise in content creation to her role as a freelancer, having collaborated with educational institutions and jewellery brands for over 5 years. As a certified yoga and mindfulness-based stress reduction (MBSR) trainer, and zumba instructor, sharon conducts workshops that foster perspective development, mindfulness, and well-being. Her research interests include art therapy, mindfulness, child care, and elderly care, reflecting her passion for holistic development and social welfare. As a member of padma foundation, sharon looks forward to contributing her skills and experience to support the organization's mission."
        ]
    },
     {
        name: "rinu Prince",
        position:"Domain Expert Director (Healing and Wellness)",
        imageUrl: rinu,
        bio: [
            "Rinu P Ashok, as a director at Padma, contributes significantly to the organization's mission through the lens of Indian Knowledge Systems (IKS). By integrating IKS principles, she helps promote holistic well-being, cultural preservation, and sustainable development. Her expertise in mental wellness and holistic care, showcased through Nirvana Life Path, aligns with IKS's emphasis on balance, mindfulness, and interconnectedness. This approach enables Padma to foster a deeper understanding of ancient wisdom and its applications in modern life, supporting individuals in achieving harmony and well-being. By bridging traditional knowledge with contemporary practices, Rinu P Ashok's work at Padma embodies the IKS vision of blending timeless wisdom with modern relevance."
        ]
    }
];

// --- Director Profile Component ---
const DirectorProfile = ({ name, position, imageUrl, bio, reverse = false, index }) => (
    <motion.div 
        className="flex md:flex-row flex-col gap-8 md:gap-12 w-full"
        {...fadeInUp}
        transition={{ ...fadeInUp.transition, delay: index * 0.2 }}
    >
        <motion.div 
            className='md:w-[60%] w-full'
            {...fadeInLeft}
            transition={{ ...fadeInLeft.transition, delay: index * 0.2 + 0.1 }}
        >
            <div className="text-gray-600 md:space-y-6 space-y-3 leading-relaxed text-center md:text-left">
                {bio.map((paragraph, paraIndex) => (
                    <motion.div 
                        key={paraIndex} 
                        className='max-w-3xl lg:pr-10 text-justify'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + paraIndex * 0.1 + 0.3, duration: 0.5 }}
                    >
                        <p className='font-helvetica font-sm txt-black leading-loose md:text-base tracking-widest text-justify'>{paragraph}</p>
                    </motion.div>
                ))}
                <hr className="md:block hidden mt-6 md:border-t-4 border-t-2 border-[#7E221F] max-w-md" />
            </div>
        </motion.div>

        <motion.div 
            className='flex flex-col items-center md:w-[30%] w-full'
            {...fadeInRight}
            transition={{ ...fadeInRight.transition, delay: index * 0.2 + 0.2 }}
        >
            <div className="flex justify-center pt-5">
                <OrnateImageFrame imageUrl={imageUrl} altText={`Profile of ${name}`} />
            </div>
            <motion.p 
                className='pt-6 capitalize text-base'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.4 }}
            >
                {name}
            </motion.p>
            <motion.p 
                className='text-sm'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.4 }}
            >
                {position}
            </motion.p>
        </motion.div>

        <hr className="md:hidden block mt-6 md:border-t-4 border-t-2 border-[#7E221F] max-w-md" />
    </motion.div>
);

function Directors() {
  return (
     <section className="bg-[var(--background)] font-helvetica py-6 md:py-32 px-4 sm:px-6 lg:px-8" id="Team" >
        <div className="max-w-7xl mx-auto flex flex-col">
            
            {/* Main Title */}
            <motion.h2 
                className="text-2xl md:text-3xl font-playfair font-extrabold text-dark-red text-left tracking-widest mb-2 pl-7"
                {...fadeInUp}
            >
                Directors
            </motion.h2>
            
            <motion.div 
                className="flex justify-start items-start"
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
                <img src={dirline} alt='dirline' className='w-auto h-auto' />
            </motion.div>

            {/* Directors List */}
            <div className="md:mt-16 mt-6 w-full md:space-y-16 space-y-10">
                {directorsData.map((director, index) => (
                    <DirectorProfile 
                        key={director.name}
                        {...director}
                        index={index}
                        reverse={index % 2 !== 0} 
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Directors