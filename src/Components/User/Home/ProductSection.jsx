import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import pline from '../../../assets/images/pline.svg'
import bgpro from '../../../assets/images/bgpro.png'
import belowcard from '../../../assets/images/belowcard.png'
import star from '../../../assets/images/star.svg'




const ProductSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

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

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < services.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative py-10 px-4 lg:pt-28" id="Products">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-300 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-red-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-orange-300 rotate-45"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-playfair font-extrabold text-dark-red text-center tracking-widest mb-2">
            Products & Services
          </h2>
          <div className="flex justify-center items-center">
            <img src = {pline} alt='pline' className='w-auto h-auto' />
        </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div className='flex flex-col'>
              <div className="h-full bg-[#7E221F] rounded-2xl p-6 shadow-lg text-white font-helvetica relative overflow-hidden">
        {/* Subtle background pattern */}
        <div
        className="absolute inset-0 opacity-100 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgpro})` }}
        ></div>
        <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
           <ul className="space-y-3 list-none">
  {service.items.map((item, index) => (
    <li
      key={index}
      className="leading-relaxed relative pl-6 before:content-['★'] before:absolute before:left-0 before:text-white"
    >
      {item}
    </li>
  ))}
</ul>

        </div>
    </div>
    <div className=''>
        <img src={belowcard} alt='' className='' />
         </div>
    </div>
          ))}
        </div>

        {/* Mobile Swiper View */}
        <div className="md:hidden">
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={sliderRef}
          >
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-[#7E221F] rounded-2xl p-6 text-white shadow-2xl mx-auto max-w-sm">
                    <h3 className="text-xl font-bold mb-6 text-center border-b  pb-3">
                      {service.title}
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-amber-300 mr-2 mt-1 text-sm">●</span>
                          <span className="text-red-100 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-6 px-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full transition-all duration-200 ${
                currentSlide === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-red-800 text-white hover:bg-red-700 shadow-lg'
              }`}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? 'bg-red-800 scale-125'
                      : 'bg-red-300 hover:bg-red-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === services.length - 1}
              className={`p-2 rounded-full transition-all duration-200 ${
                currentSlide === services.length - 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-red-800 text-white hover:bg-red-700 shadow-lg'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 text-center">
            <span className="text-red-700 text-sm">
              {currentSlide + 1} of {services.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;