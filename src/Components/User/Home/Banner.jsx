import React from 'react'
import { motion } from 'framer-motion'
import banner from '../../../assets/images/banner.png'

function Banner() {
  // Animation variants for dramatic entrance
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth flow
        delay: 0.5
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.4,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  // Floating animation for subtle continuous movement
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Text reveal animation for each word
  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: 0.8 + i * 0.1,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center font-playfair text-white overflow-hidden"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Animated overlay */}
      <motion.div 
        className="absolute inset-0 bg-black"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Subtle background animation elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
        //   repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full opacity-30"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Main content container */}
      <motion.div 
        className="relative z-10 text-center px-4"
      >
        {/* Main title with word-by-word reveal */}
        <div className="overflow-hidden">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-light font-playfair"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {["Padma", "Knowledgeverse"].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-4"
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle with typewriter effect */}
        <motion.div className="overflow-hidden">
          <motion.p 
            className="mt-4 text-lg md:text-xl font-helvetica max-w-xl mx-auto"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            What if you could be your best self? Padma helps you bloom.
          </motion.p>
        </motion.div>

     

     
      </motion.div>
    </section>
  )
}

export default Banner