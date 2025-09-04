import React from 'react'
import banner from '../../../assets/images/banner.png'


function Banner() {
  return (
     <section 
            id="home"
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center font-playfair text-white"
            style={{ backgroundImage: `url(${banner})` }}
        >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Text content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light font-playfair">
                    Padma Knowledgeverse
                </h1>
                <p className="mt-4 text-lg md:text-xl font-helvetica max-w-xl mx-auto">
                    What if you could be your best self? Padma helps you bloom.
                </p>
            </div>
        </section>
  )
}

export default Banner
