import React from 'react'
import guruunderline from '../../../assets/images/guruunderline.svg'
import middle from '../../../assets/images/middle.svg'
import misioneye from '../../../assets/images/misioneye.svg'
import visioneye from '../../../assets/images/visioneye.svg'
import contactflower from '../../../assets/images/contactflower.svg'
import design from '../../../assets/images/design.png'



function VisionSection() {
  return (
      <section className="bg-white font-helvetica  pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 relative  w-full h-full " id="Vision">
            <div className="absolute top-0 -right-7 hidden lg:block opacity-100">
                <img src={contactflower} alt="contactflower"  className='w-[90%] h-auto'/>
            </div>

            <div className="absolute -bottom-24 -left-7 hidden lg:block opacity-100">
                <img src={contactflower} alt="contactflower"  className='w-[90%] h-auto  transform scale-x-[-1]'/>
            </div>

          
            
            <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
                {/* Main Title */}
                <h2 className="text-2xl md:text-3xl font-playfair font-extrabold text-dark-red text-center tracking-widest mb-2">
                    "Gurumugha To Contemporaneity"
                </h2>
                <div className="my-4">
                    <img src={guruunderline} alt="guruunderline" className='w-auto h-auto' />
                </div>

                {/* Content Grid */}
                <div className="mt-16 flex gap-y-12 md:gap-x-12 items-start w-full">
                    
                    {/* Vision Column */}
                    <div className="flex flex-col items-start text-left md:w-[30%] w-full gap-4">
                    <img src={visioneye} alt="mission eye" className="w-auto h-auto" />
                    <h3 className="font-playfair text-2xl text-dark-red font-bold">Vision</h3>
                    <p className="font-helvetica font-sm text-black leading-loose md:text-base tracking-widest max-w-xs">
                        Empowering modern minds with timeless wisdom.
                    </p>
                    </div>


                    {/* Divider - Hidden on mobile, flex-box on tablet, block on desktop */}
                    <div className="hidden lg:flex justify-center items-start md:w-[30%] w-full">
                        <img src={middle} alt="middle" className='w-auto h-auto' />
                    </div>
                     {/* A simple line for medium screens */}
                    <hr className="w-1/2 mx-auto my-8 border-amber-800/20 md:w-full lg:hidden " />


                    {/* Mission Column */}
                    <div className="flex flex-col   items-start  md:w-[30%] w-full">
                        <img src={misioneye} alt ="mission eye" className='w-auto h-auto ' />
                        <h3 className="font-playfair text-2xl text-dark-red font-bold mt-4 ">Mission</h3>
                        <p className="mt-2 font-helvetica  font-sm text-black leading-loose md:text-base t tracking-widest max-w-xs">
                            To bridge ancient knowledge with contemporary relevance, making traditional wisdom accessible, practical, and transformative for a rapidly changing world.
                        </p>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default VisionSection
