"use client";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Logo from '../../../assets/images/logo.png'
import { MdOutlinePhoneInTalk } from "react-icons/md";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Store active section
  const menuBackgroundRef = useRef(null);
  const contactButtonRef = useRef(null);
  const menuItemsRef = useRef([]);
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#About" },
    { label: "Vision and Mission", href: "#Vision" },
    { label: "Product and Services", href: "#Products" },
    { label: "Course sample", href: "#Course" },
    { label: "Team", href: "#Team" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = "";
      let minDistance = window.innerHeight; // Start with max possible distance
  
      navItems.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          const rect = section.getBoundingClientRect();
          const distanceFromCenter =  Math.abs(rect.top - (window.innerHeight / 2) + 300);
          if (distanceFromCenter < minDistance) {
            minDistance = distanceFromCenter;
            closestSection = item.href.substring(1);
          }
        }
      });
      setActiveSection(closestSection);
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call immediately to set the correct section on load
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        menuBackgroundRef.current,
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.75, ease: "power3.inOut" }
      );
      gsap.fromTo(
        menuItemsRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, delay: 0.5, ease: "power3.out" }
      );
      gsap.fromTo(
        contactButtonRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, delay: 0.5 + navItems.length * 0.1, ease: "power3.out" }
      );
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.nav 
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.3, ease: "easeOut",  }}
    className="  md:h-22 h-22 fixed top-0 z-50  w-full md:px-16 px-4  font-playfair bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="flex items-center justify-between bg-white  w-full  py-2   pl-2 px-2">
          {/* Logo */}
          <div className="flex-shrink-0 md:pl-10 pl-4">
            <div className="relative flex items-start cursor-pointer ">
              <img src={Logo} alt="Logo" className=" w-auto h-18" />
            </div>
          </div>

          {/* Desktop Navigation */}
    <div className="hidden lg:flex items-center space-x-10 bg-white px-2 py-2">
    {navItems.map((item) => (
      <button
        key={item.href}
        onClick={() => scrollToSection(item.href.substring(1))}
        className={`relative font-playfair text-base capitalize font-medium transition-colors px-3 py-1 ${
          activeSection === item.href.substring(1)
            ? "text-[#9F5434]" // Added a distinct active text color for clarity
            : "text-[#9F5434]"
        } group`}
      >
        {item.label}

        {/* This is the hover underline for INACTIVE items */}
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[1px] bg-[#9F5434] transition-all duration-300 group-hover:w-4/5"></span>

        {/* This is the underline for ACTIVE items (Corrected) */}
        {activeSection === item.href.substring(1) && (
          <span
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-4/5 bg-[#9F5434] rounded-full"
          ></span>
        )}
      </button>
    ))}
  </div>

          {/* Contact Button */}
          <div className="flex">
            <button className="lg:block hidden bg-[#9F5434] hover:bg-[#9F5434] text-white rounded-full px-4 py-1" 
             onClick={() => scrollToSection("contact")}>
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden pr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center px-4 py-2 rounded-[30px] text-white bg-[#9F5434]"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuBackgroundRef}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#fff] lg:hidden pt-10"
          >
            <div className="flex flex-col h-full pb-6 pl-12 pr-4">
              {/* Header */}
              <div className="flex justify-between items-center mb-10 md:pr-20 lg:pr-0">
                <Image src={Logo} alt="Logo" className="h-auto w-[30%]" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-white bg-[#9F5434]"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col pt-10 items-start flex-1 font-poppins">
                {navItems.map((item, i) => (
                  <button
                    key={item.label}
                    ref={(el) => (menuItemsRef.current[i] = el)}
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className="text-xl font-bold pb-6 text-[#9F5434]/80 hover:text-[#9F5434]"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
