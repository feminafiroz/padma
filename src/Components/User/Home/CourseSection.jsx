import React from 'react'
import coursebg from '../../../assets/images/coursebg.svg'
import lyn from '../../../assets/images/lyn.svg'
import star from '../../../assets/images/star.svg'


// --- Data for the Courses ---
const courseData = [
    {
        number: 1,
        title: "Readying the spiritual dancer",
        details: "Readying the <br/> Spiritual Dancer<br/>  Credit: 2 Total Hours:<br/>  30 /PG/ <br/> Prerequisite: <br/> Trained Dancer"
    },
    {
        number: 2,
        title: "Healing through rasa dynamics",
        details: "Healing through <br/> Rasa Dynamics <br/> Credit: 2 Total Hours:<br/> 30 PG/ No<br/> Prerequisite"
    },
    {
        number: 3,
        title: "Embodied empathy through vedic wisdom",
        details: "Embodied Empathy <br/> through Vedic<br/> Wisdom Credit: 1 <br/>Total Hours: 15 UG/<br/> PG No Prerequisite"
    },
    {
        number: 4,
        title: "Dharmic spatial awareness for modern life",
        details: "Dharmic Spatial<br/> Awareness for<br/> Modern Life Credit:<br/> 1 Total Hours: 15 UG/<br/> PG No Prerequisite"
    }
];

const NumberBurstIcon = ({ number }) => (
    <div className="absolute top-8 left-5 w-20 h-20">
        {/* You can replace the SVG with your img tag like this: */}
        <img src={star} alt={`Course ${number}`} className="w-full h-full" />
        {/* <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-dark-red">
            <path d="M50 0L61.2 35.5L97.6 30.9L73.1 50L97.6 69.1L61.2 64.5L50 100L38.8 64.5L2.4 69.1L26.9 50L2.4 30.9L38.8 35.5L50 0Z" />
        </svg> */}
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl font-playfair">
            {number}
        </div>
    </div>
);



const CourseCard = ({ number, title, details }) => (
  <div
     className="relative w-full aspect-[3.5/4]  "
  >
    <img 
        src= {coursebg}
        alt="Course background" 
        className="absolute inset-0 w-full h-full object-contain"
    />

    <NumberBurstIcon number={number} />

    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-dark-red pt-20 ">
        {/* <h3 className="text-lg font-semibold leading-snug mb-3">{title}</h3> */}
        {/* Using whitespace-pre-line to respect the newlines in the details string */}
       <p
        className="text-base leading-loose tracking-widest text-dark-red/80  font-helvetica max-w-xs  pt-2"
        dangerouslySetInnerHTML={{ __html: details }}
        ></p>
    </div>
  </div>
);


function CourseSection() {
  return (
     <section className="bg-[var(--background)] font-helvetica py-24 sm:py-32 px-4 sm:px-6 lg:px-8" id="Course">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Main Title */}
                <h2 className="text-2xl md:text-2xl font-playfair font-bold text-dark-red text-center">
                    Course Sample
                </h2>
               <div className="">
                    <img src = {lyn} alt='aboutline' className='w-auto h-auto' />
                </div>

                {/* Responsive Grid */}
                <div className="mt-16 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                     {courseData.map((course) => (
                        <div key={course.number}>
                            <CourseCard {...course} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default CourseSection
