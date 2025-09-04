import React, { useState } from 'react';
import contactflower from '../../../assets/images/contactflower.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
     <section className="bg-[var(--background)] font-helvetica pt-24 md:pt-32 pb-4 px-4 md:px-0  relative overflow-hidden" id="contact">
            {/* Decorative image placeholder */}
            <div className="absolute top-0 -right-7 hidden lg:block opacity-100">
                {/* Replace this div with your <img> tag */}
                <img src={contactflower} alt="contactflower"  className='w-[90%] h-auto'/>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                    
                    {/* --- Left Column: Contact Info --- */}
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-2xl md:text-2xl font-playfair font-extrabold text-dark-red  tracking-widest mb-4">
                                Contact Us
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-playfair text-gray-800 mb-2">
                                Let's Connect
                            </h3>
                            <p className="mt-4 text-gray-600 max-w-md text-sm pr-10">
                                Looking for more information or have a question? Email us at <a href="mailto:aswathy@padmafoundation.in" className="underline ">aswathy@padmafoundation.in</a> or fill in the form below and we'll get back to you.
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                             <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700 rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                             <a href="mailto:aswathy@padmafoundation.in" className="text-xl text-gray-800 font-medium underline tracking-wide hover:text-dark-red transition-colors">
                                aswathy@padmafoundation.in
                            </a>
                        </div>
                        
                        <div className="grid grid-cols-1  gap-6 pt-8 text-gray-600">
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2">connect</h4>
                                <a href="#" className="block hover:text-dark-red">Facebook</a>
                                <a href="#" className="block hover:text-dark-red">Instagram</a>
                                <a href="#" className="block hover:text-dark-red">LinkedIn</a>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2">visit us</h4>
                                <p>Ambadi Kattungal, Chunangaveli</p>
                                <p>Erumathala P.O. Aluva</p>
                                <p>Ernakulam, Kerala 683112</p>
                            </div>
                             <div>
                                <h4 className="font-bold text-gray-800 mb-2">phone</h4>
                                <p>+91 7736319626</p>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: Form --- */}
                    <div>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="sr-only">Name*</label>
                                <input type="text" name="name" id="name" placeholder="Name*" className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-dark-red/50 outline-none transition" />
                            </div>
                             <div>
                                <label htmlFor="email" className="sr-only">Email*</label>
                                <input type="email" name="email" id="email" placeholder="Email*" className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-dark-red/50 outline-none transition" />
                            </div>
                             <div>
                                <label htmlFor="message" className="sr-only">Message*</label>
                                <textarea name="message" id="message" rows="4" placeholder="Message*" className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-dark-red/50 outline-none transition"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-[#7E221F] text-white py-2 px-8 rounded-md hover:bg-opacity-90 transition-colors font-semibold text-lg">
                                    Submit Now
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            
            {/* --- Footer: Back to Top --- */}
            <div className="max-w-6xl mx-auto text-center pt-6 mt-10 border-t border-gray-200">
                <a href="#" className="text-gray-600 hover:text-dark-red transition-colors">
                    Back to top
                </a>
            </div>
        </section>
  );
};

export default Contact;