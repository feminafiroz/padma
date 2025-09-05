import React from 'react'
import aboutline from '../../../assets/images/aboutline.svg'


function About() {
    const padmaItems = [
        { letter: 'P', word: 'PRESENCE' },
        { letter: 'A', word: 'AWARENESS' },
        { letter: 'D', word: 'DHARMA' },
        { letter: 'M', word: 'MOVEMENT' },
        { letter: 'A', word: 'AWAKENING' },
    ];
  return (
     <section className="bg-white font-sans py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="About">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Main Title with Decorative Elements */}
                <h2 className="text-2xl md:text-2xl font-playfair font-bold text-dark-red text-center">About us</h2>
                <div className="">
                    <img src = {aboutline} alt='aboutline' className='w-auto h-auto' />
                </div>
                
                {/* P.A.D.M.A. Acronym Section */}
                <div className="flex md:flex-row flex-col  justify-center md:items-start items-center gap-6 md:gap-8 lg:gap-30 my-8 md:my-12 w-full ">
                    {padmaItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-3  w-32 ">
                            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200 shadow-sm">
                                <span className="text-8xl font-bold text-dark-red font-playfair ">{item.letter}</span>
                            </div>
                            <p className="text-base font-semibold uppercase tracking-widest text-dark-red font-playfair">{item.word}</p>
                        </div>
                    ))}
                </div>

                {/* Description Paragraph */}
                <p className="max-w-7xl font-helvetica mx-auto font-sm text-gray-600 leading-loose md:text-base text-justify tracking-widest">
                    Padma is a knowledge-sharing and creation domain that leverages art, culture, and ancient wisdom to empower individuals and communities. Born out of the pandemic's challenges, padma has grown into a vibrant platform, connecting people worldwide through its multifaceted approach. Guided by the principles of Presence, Awareness, Dharma, Movement, and Awakening (P.A.D.M.A.), padma fosters a deeper understanding of oneself and the world, promoting holistic growth and transformation. Through education, artistic expression, and healing, padma aims to liberate knowledge and promote positive change, inspiring individuals to bloom into their full potential.
                </p>

            </div>
        </section>
  )
}

export default About
