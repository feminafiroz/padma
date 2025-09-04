import React from 'react'
import patronlinee from '../../../assets/images/patronlinee.svg'
import patroncircle from '../../../assets/images/patroncircle.png'


// Simplified SVG for the decorative mandala pattern at the bottom
const MandalaIcon = () => (
  <div className="w-36 h-28 opacity-100">
    <img src={patroncircle} alt="Mandala" className="w-full h-full object-contain" />
  </div>
);


function Patron() {
  return (
    <section className="bg-white font-helvetica py-14 md:py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                {/* Main Title */}
                <h2 className="text-2xl md:text-3xl font-playfair font-extrabold text-dark-red text-center tracking-widest mb-2">
                    Patron
                </h2>
                <div className="flex justify-center items-center">
                    <img src = {patronlinee} alt='pline' className='w-auto h-auto' />
                </div>

                {/* Text Content */}
                <div className="mt-8  font-helvetica font-sm text-gray-600 leading-loose md:text-base tracking-widest">
                    <p>
                        Kalamandalam M.P.S. Namboodiri, a distinguished Kathakali scholar, performer, and teacher, serves as a patron of Padma. With a remarkable career spanning decades, he joined Kerala Kalamandalam's faculty in 1968 and retired as Principal in 1998. He was later reappointed as Dean of the Department of Kathakali in 2007. Dr.Namboodiri's expertise in Kathakali is evident in his co-authored book,"Kathakaliyude Rangapadha Charithram," which won the prestigious Kalamandalam award in 2007.
                    </p>
                    <br />
                    <p>
                       His outstanding contributions to Kathakali earned him recognition from the Government of India's National Academy for Music, Dance, and Drama in 2013. As a patron of Padma, Dr. Namboodiri brings his wealth of knowledge and experience, guiding the organization in its mission to promote art, culture, and holistic well-being.
                    </p>
                </div>
    </div>
                {/* Decorative Mandala Row */}
                <div className="  mt-16 w-full flex justify-center items-center flex-wrap gap-x-2 gap-y-2">
                    {/* Repeat the mandala icon 7 times */}
                    {[...Array(7)].map((_, i) => (
                        <MandalaIcon key={i} />
                    ))}
                </div>
        
        </section>
  )
}

export default Patron
