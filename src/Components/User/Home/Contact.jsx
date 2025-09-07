import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import contactflower from '../../../assets/images/contactflower.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]); 




  const EMAILJS_SERVICE_ID = 'service_dsyacyl';      // From step 2
  const EMAILJS_TEMPLATE_ID = 'template_jemu6ln';    // From step 3
  const EMAILJS_PUBLIC_KEY = 'OndTUNUjkla5YwpLM';

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_name: 'PADMA Foundation', // You can customize this
        },
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div 
                className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
              >
                ✅ Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div 
                className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
              >
                ❌ Sorry, there was an error sending your message. Please try again or email us directly.
              </motion.div>
            )}

            <motion.form 
              className="space-y-4"
              {...staggerContainer}
              transition={{ ...staggerContainer.transition, delayChildren: 0.5 }}
              onSubmit={handleSubmit}
            >
              <motion.div {...fadeInUp}>
                <label htmlFor="name" className="sr-only">Name*</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Name*" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-[#7E221F]/90 outline-none transition disabled:opacity-50" 
                />
              </motion.div>
              
              <motion.div {...fadeInUp}>
                <label htmlFor="email" className="sr-only">Email*</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Email*" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-[#7E221F]/90 outline-none transition disabled:opacity-50" 
                />
              </motion.div>
              
              <motion.div {...fadeInUp}>
                <label htmlFor="message" className="sr-only">Message*</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  placeholder="Message*" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-[#7E221F]/90 outline-none transition disabled:opacity-50">
                </textarea>
              </motion.div>
              
              <motion.div 
                {...fadeInUp}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#7E221F] text-white py-2 px-8 rounded-md hover:bg-opacity-90 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Submit Now'
                  )}
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
      
      {/* Footer: Back to Top */}
      <motion.div 
        className="max-w-6xl mx-auto text-center pt-6 mt-10 border-t border-gray-200"
      >
        <a href="#" className="text-gray-600 hover:text-dark-red transition-colors">
          Back to top
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;