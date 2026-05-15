import React, { useEffect, useState } from "react";
import {
  Menu, X, ChevronLeft, ChevronRight,
  ArrowBigRight
} from "lucide-react";
import { RiFacebookLine, RiInstagramLine, RiMailAiLine, RiMailFill, RiMailLine, RiTwitterXLine } from "@remixicon/react";
import logo from '../assets/logo.png'
export default function Home() {
  return (
    <>
      <div>
        <Header />
        <AutoCarousel />
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

const slides = [
  {
    id: 1,
    title: "Distributing goods",
    image:
      "https://plus.unsplash.com/premium_photo-1733306621909-1d63c088a93e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5nb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "Working together",
    image:
      "https://images.unsplash.com/photo-1774504798113-a03e2aa24789?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG5nb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    title: "Cutting Crops",
    image:
      "https://images.unsplash.com/photo-1708592190055-b9a311e4fcd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG5nb3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

export function AutoCarousel() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Auto slide every 3 seconds (pauses if user is dragging)
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current, isDragging]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // --- Mouse/Touch Swipe Logic ---
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    const clientX = e.type.includes("mouse") ? e.clientX : e.changedTouches[0].clientX;
    const dragDistance = startX - clientX;

    if (dragDistance > 50) {
      nextSlide(); // Swiped left
    } else if (dragDistance < -50) {
      prevSlide(); // Swiped right
    }
  };

  return (
    <div className="w-full mx-auto py-4">

      {/* Carousel Container (Added 'relative' and 'group') */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-2xl group">

        {/* Slides Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full relative select-none">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[600px] object-cover pointer-events-none"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                <h2 className="text-white text-3xl font-bold">{slide.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${current === index ? "bg-white" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Description Text */}
      <div className="mt-8 space-y-6 px-4 sm:px-6 lg:px-8">
        <p className="text-gray-700 text-center text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
          Established in 2002, Smile Foundation is an Indian development
          organization, impacting the lives of over 20 lakh children and their
          families every year. We have more than 400 projects on education,
          healthcare, livelihood, and women empowerment in over 2,000 remote
          villages and urban slums across 27 states of India.
        </p>

        <p className="text-gray-700 text-center text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
          Smile Foundation works as a catalyst in the cycle of change,
          complementing and supplementing government efforts (view details) to
          achieve the Sustainable Development Goals. We sensitize and partner
          with like-minded institutions and individuals to implement high-impact
          programmes that enable access, enhance quality and help bring long
          term behavioural change at the grassroots.
        </p>

        <div className="pt-2">
          <a
            href="#"
            className="group flex items-center justify-center gap-2 text-green-500 hover:text-green-700 w-max mx-auto text-lg md:text-xl font-semibold transition-all duration-300"
          >
            Read more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
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
