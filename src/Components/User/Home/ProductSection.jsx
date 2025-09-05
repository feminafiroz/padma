import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';
import pline from '../../../assets/images/pline.svg'
import bgpro from '../../../assets/images/bgpro.png'
import belowcard from '../../../assets/images/belowcard.png'

const ProductSection = () => {
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
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.1, duration: 0.3 }
  };

  const cardHover = {
    whileHover: { y: -10, transition: { duration: 0.2 } }
  };

  const services = [
    {
      title: "Philanthropic Services:",
      items: [
        "Supporting social causes and community development"
      ]
    },
    {
      title: "Education:",
      items: [
        "Educational programs and workshops",
        "Course design and certificate courses",
        "Mentoring for educators (like integration)"
      ]
    },
    {
      title: "Art & Culture:",
      items: [
        "Research workshops and support",
        "Art mentoring and workshops"
      ]
    },
    {
      title: "Healing Services:",
      items: [
        "Natya Therapy Services (Healing Through Art)"
      ]
    }
  ];

  return (
    <div className="relative py-10 px-4 lg:pt-28" id="Products">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-300 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-24 h-24 border-2 border-red-300 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 border border-orange-300 rotate-45"
          animate={{ rotate: [45, 90, 45] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            className="text-2xl md:text-3xl font-playfair font-extrabold text-dark-red text-center tracking-widest mb-2"
            {...fadeInUp}
          >
            Products & Services
          </motion.h2>
          <motion.div 
            className="flex justify-center items-center"
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img src={pline} alt='pline' className='w-auto h-auto' />
          </motion.div>
        </div>

        {/* Desktop Grid View */}
        <motion.div 
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          {...staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className='flex flex-col'
              {...fadeInUp}
              {...cardHover}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
            >
              <div className="h-full bg-[#7E221F] rounded-2xl p-6 shadow-lg text-white font-helvetica relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-100 bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${bgpro})` }}
                ></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <ul className="space-y-3 list-none">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="leading-relaxed relative pl-6 before:content-['★'] before:absolute before:left-0 before:text-white"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <img src={belowcard} alt='' />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Swiper */}
        <motion.div 
          className="md:hidden"
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.4 }}
        >
          <Swiper
            slidesPerView={1.2}
            spaceBetween={16}
            centeredSlides={true}
            className="!px-1"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className='flex flex-col h-full'
                  
                >
                  <div className="flex-grow bg-[#7E221F] rounded-2xl p-6 shadow-lg text-white font-helvetica relative overflow-hidden h-72">
                    <div
                      className="absolute inset-0 opacity-100 bg-no-repeat bg-cover"
                      style={{ backgroundImage: `url(${bgpro})` }}
                    ></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                      <ul className="space-y-3 list-none">
                        {service.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="leading-relaxed relative pl-6 before:content-['★'] before:absolute before:left-0 before:text-white"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <img src={belowcard} alt='' />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductSection;