import React from 'react'
import coinline from '../../../assets/images/coinline.svg'
import coinpadma from '../../../assets/images/coinpadma.svg'



function CoinageSection() {
  return (
     <section className="bg-white font-helvetica py-16  px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex w-full gap-12 md:gap-16  pr-10 ">
                
                {/* Left Column: Text Content */}
                <div className="flex flex-col  md:items-start md:text-left md:w-[50%] w-full  ">
                    <h2 className="text-3xl md:text-4xl font-playfair text-dark-red">
                        Coinage Of The Name
                    </h2>
                    <div className="my-4 pl-4 ">
                       <img src={coinline} alt="coinline" className='w-auto h-auto pl-4' />
                    </div>
                    <p className="max-w-xl font-helvetica font-sm text-gray-600 leading-loose md:text-base tracking-widest">
                        'PADMA' as the name sounds, is a concept closely associated with the vision of lotus wisdom, aiming the blooming and liberation of knowledge happen and traverse through different somatic practices of body-memory.
                    </p>
                </div>

                {/* Right Column: Logo */}
                <div className="flex justify-center md:w-[50%] w-full">
                    <img src={coinpadma} alt="coinpadma" className='w-auto h-auto' />

                </div>

            </div>
        </section>
  )
}

export default CoinageSection
