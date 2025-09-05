import React, { useState } from 'react';
import { motion } from 'framer-motion';
import contactflower from '../../../assets/images/contactflower.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.1 }
  };

  return (
    <section className="bg-[var(--background)] font-helvetica pt-4 md:pt-32 pb-4 px-4 md:px-0 relative overflow-hidden" id="contact">
      
      {/* Decorative flower with floating animation */}
      <motion.div 
        className="absolute top-0 -right-7 hidden lg:block opacity-100"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <img src={contactflower} alt="contactflower" className='w-[90%] h-auto'/>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 gap-12 items-end">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            className="space-y-4"
            {...fadeInLeft}
          >
            <div>
              <motion.h2 
                className="text-2xl md:text-2xl font-playfair font-extrabold text-dark-red tracking-widest mb-4"
                {...fadeInUp}
              >
                Contact Us
              </motion.h2>
              
              <motion.h3 
                className="text-4xl md:text-5xl font-playfair text-gray-800 mb-2"
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.1 }}
              >
                Let's Connect
              </motion.h3>
              
              <motion.p 
                className="mt-4 text-gray-600 max-w-md text-sm pr-10"
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
              >
                Looking for more information or have a question? Email us at <a href="mailto:aswathy@padmafoundation.in" className="underline">aswathy@padmafoundation.in</a> or fill in the form below and we'll get back to you.
              </motion.p>
            </div>

            <motion.div 
              className="flex items-center gap-2"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 rotate-45">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
              <a href="mailto:aswathy@padmafoundation.in" className="text-xl text-gray-800 font-medium underline tracking-wide hover:text-dark-red transition-colors">
                aswathy@padmafoundation.in
              </a>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 gap-6 md:pt-8 pt-4 text-gray-600"
              {...staggerContainer}
              transition={{ ...staggerContainer.transition, delayChildren: 0.4 }}
            >
              <motion.div {...fadeInUp}>
                <h4 className="font-bold text-gray-800 mb-2">connect</h4>
                <a href="#" className="block hover:text-dark-red text-[#232323]">Facebook</a>
                <a href="#" className="block hover:text-dark-red text-[#232323]">Instagram</a>
                <a href="#" className="block hover:text-dark-red text-[#232323]">LinkedIn</a>
              </motion.div>
              
              <motion.div {...fadeInUp}>
                <h4 className="font-bold text-gray-800 mb-2">visit us</h4>
                <p className='text-[#232323]'>Ambadi Kattungal, Chunangaveli</p>
                <p className='text-[#232323]'>Erumathala P.O. Aluva</p>
                <p className='text-[#232323]'>Ernakulam, Kerala 683112</p>
              </motion.div>
              
              <motion.div {...fadeInUp}>
                <h4 className="font-bold text-gray-800 mb-2">phone</h4>
                <p className='text-[#232323]'>+91 7736319626</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            {...fadeInRight}
            transition={{ ...fadeInRight.transition, delay: 0.2 }}
          >
            <motion.form 
              className="space-y-4"
              {...staggerContainer}
              transition={{ ...staggerContainer.transition, delayChildren: 0.5 }}
            >
              <motion.div {...fadeInUp}>
                <label htmlFor="name" className="sr-only">Name*</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Name*" 
                  className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-dark-red/50 outline-none transition" 
                />
              </motion.div>
              
              <motion.div {...fadeInUp}>
                <label htmlFor="email" className="sr-only">Email*</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Email*" 
                  className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-dark-red/50 outline-none transition" 
                />
              </motion.div>
              
              <motion.div {...fadeInUp}>
                <label htmlFor="message" className="sr-only">Message*</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  placeholder="Message*" 
                  className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-dark-red/50 outline-none transition">
                </textarea>
              </motion.div>
              
              <motion.div 
                {...fadeInUp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button 
                  type="submit" 
                  className="w-full bg-[#7E221F] text-white py-2 px-8 rounded-md hover:bg-opacity-90 transition-colors font-semibold text-lg"
                >
                  Submit Now
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
      
      {/* Footer: Back to Top */}
      <motion.div 
        className="max-w-6xl mx-auto text-center pt-6 mt-10 border-t border-gray-200"
        // {...fadeInUp}
        // transition={{ ...fadeInUp.transition, delay: 0.8 }}
      >
        <a href="#" className="text-gray-600 hover:text-dark-red transition-colors">
          Back to top
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;