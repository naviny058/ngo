import React, { useEffect, useState } from "react";
import {
  Menu, X, ChevronLeft, ChevronRight,
  ArrowBigRight
} from "lucide-react";
import { RiFacebookLine, RiInstagramLine, RiMailAiLine, RiMailFill, RiMailLine, RiTwitterXLine } from "@remixicon/react";
import logo from '../assets/logo.png'
import girl from '../assets/girl.png'
import second from '../assets/second.png'

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <AboutUs />
        <LatestActivities />
        <Footer />
      </div>
    </>
  )
}
const navItems = [
  "About Us",
  // "Our Team",
  // "Apply Now",
  // "Events & News",
  // "Gallery",
  "Contact Us",
  "Pages",
  "Support Us",
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between md:h-24">
            {/* NGO Text */}
            <img src={logo} alt="" className="h-20" />
            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-800"
              >
                <Menu size={28} />
              </button>
            </div>

            {/* Desktop Left Spacer */}
            <div className="hidden md:block w-20"></div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-7 text-xl">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-green-500 transition"
                >
                  {item}
                </a>
              ))}
            </nav>
            <button className="bg-green-500 hidden md:flex py-2 text-lg px-6 rounded-md text-white font-bold">Login</button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-50 shadow-xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 h-16 border-b">
          <h2 className="text-xl font-bold text-green-500">OUR NGO</h2>

          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex flex-col p-5 space-y-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 font-medium hover:text-green-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export function Hero() {
  const images = [logo, girl, second];
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    // Set up the interval
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // 2000ms = 2 seconds

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <section className="relative mt-24 bg-green-50 overflow-hidden py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 w-xl">
            We Help all people Around <span className="text-green-600 font-bold block sm:inline"> The world</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl/relaxed font-normal mb-8 max-w-xl">
            With a presence on every continent, we unite people, resources, and ideas to drive meaningful change in areas such as education, health, sustainability, and human rights.
          </p>
          <div>
            <button className="bg-green-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-green-200">
              Donate
            </button>
          </div>
        </div>

        {/* Image Slider Container */}
        <div className="md:w-1/2 flex justify-center w-full">
          <div className="relative w-full max-w-md h-[400px] flex justify-center items-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`ngo ${index + 1}`}
                className={`absolute rounded-tl-[100px] rounded-br-[100px] inset-0 w-full h-full object-cover shadow-2xl transition-all duration-700 ease-in-out ${index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
              />
            ))}

            {/* Visual Indicator Dots */}
            <div className="absolute -bottom-8 flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-green-600 w-5' : 'bg-green-200 w-2'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AboutUs() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-green-500 mb-12 lg:mb-16 tracking-tight">
          About Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Section */}
          <div className="w-full flex justify-center lg:justify-end">
            <img
              src="https://www.pratham.org/wp-content/uploads/2024/12/5.-ASER.jpg"
              alt="About NGOConnect"
              className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-lg object-cover transition-shadow hover:shadow-2xl duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col space-y-6 max-w-2xl mx-auto lg:mx-0">
            <p className="text-xl md:text-2xl text-gray-800 font-medium leading-snug">
              <span className="text-green-600 font-bold">NGOConnect</span> is dedicated to bridging the gap between NGOs and individuals who want to make a difference.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform enables seamless connections between volunteers and nonprofits in need, while helping donors support meaningful causes with transparency and impact.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're looking to donate, volunteer, or simply learn about initiatives in your community, NGOConnect empowers you to take action where it matters most.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

const activities = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    title: "Food Distribution Drive",
    description:
      "We organized a food distribution campaign to help underprivileged families in rural communities.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    title: "Education Support Program",
    description:
      "Providing books, learning materials, and mentorship support to children for a brighter future.",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    title: "Health Awareness Camp",
    description:
      "Free health checkups and awareness sessions were conducted for local communities and families.",
  },
];

export function LatestActivities() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-500">
            Latest Activities
          </h2>
          <p className="text-gray-500 mt-3">
            Discover our recent social activities and community programs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <img
                src={activity.img}
                alt={activity.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-600 mb-3">
                  {activity.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-green-500 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Ngo</h2>
            <p className=" text-sm leading-6">
              Whether you're looking to donate, volunteer, or simply learn about initiatives in your community, NGOConnect empowers you to take action where it matters most.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 ">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>

            <ul className="space-y-2 text-white">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className=" p-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <RiFacebookLine />
              </a>

              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <RiInstagramLine />
              </a>

              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <RiTwitterXLine />
              </a>

              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <RiMailFill />
              </a>
            </div>

            <div className="flex items-center gap-2 mt-4">
              {/* <Mail size={16} /> */}
              <span className="text-sm">hello@example.com</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
