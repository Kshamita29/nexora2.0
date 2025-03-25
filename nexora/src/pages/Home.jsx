import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCode, FaLightbulb, FaChartLine, FaCog, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaFilter, FaBriefcase, FaUserCircle } from "react-icons/fa";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

const slides = [
  {
    image: bg1,
    caption: "Welcome to NEXORA",
    subCaption: "A Digital Space Beyond the Ordinary",
    tagline: "Elevate. Innovate. Dominate."
  },
  {
    image: bg2,
    caption: "Transforming Possibilities",
    subCaption: "Pioneering next-gen solutions that drive success.",
    tagline: ""
  },
  {
    image: bg3,
    caption: "Shaping the Future",
    subCaption: "Where innovation meets seamless digital experiences.",
    tagline: ""
  }
];

const services = [
  { icon: <FaCode className="text-blue-600 text-5xl" />, title: "Web & App Development", description: "We build dynamic, scalable, and high-performance web & mobile applications tailored to your needs." },
  { icon: <FaLightbulb className="text-blue-600 text-5xl" />, title: "AI & Automation", description: "Leveraging AI to enhance efficiency and automate business processes seamlessly." },
  { icon: <FaChartLine className="text-blue-600 text-5xl" />, title: "Business Intelligence", description: "Transform data into actionable insights with our BI solutions to drive growth." },
  { icon: <FaCog className="text-blue-600 text-5xl" />, title: "Custom Software Solutions", description: "Bespoke software solutions designed to meet your unique business requirements." }
];

const testimonials = [
  {
    quote: "Nexora transformed our business with their innovative AI-driven solutions. Highly recommended!",
    name: "John Smith",
    role: "CEO, TechWave",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    quote: "Their web development team delivered a seamless experience for our customers. Fantastic work!",
    name: "Sarah Johnson",
    role: "CTO, InnovateX",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    quote: "The team at Nexora understands business needs and delivers outstanding results. A game-changer!",
    name: "David Lee",
    role: "Founder, Visionary Labs",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  }
];

const caseStudies = [
  {
    title: "AI-Powered Chatbot",
    category: "AI & Automation",
    description: "Developed a conversational AI for customer support automation.",
    image: "https://picsum.photos/150",
    link: "/case-studies/ai-chatbot"
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Built a scalable e-commerce platform with seamless user experience.",
    image: "https://picsum.photos/180",
    link: "/case-studies/ecommerce"
  },
  {
    title: "Data Analytics Dashboard",
    category: "Business Intelligence",
    description: "Created a real-time analytics dashboard for decision-making.",
    image: "https://picsum.photos/1200",
    link: "/case-studies/data-analytics"
  }
];

// Testimonials Component
const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">What Our Clients Say</h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4 relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-md"
                  onError={(e) => {
                    e.target.style.display = "none"; // Hide image
                    e.target.nextSibling.style.display = "block"; // Show icon
                  }}
                />
                <FaUserCircle className="absolute text-gray-400 text-6xl hidden" />
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-screen w-full h-screen flex items-center justify-center text-center text-white transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[currentSlide].image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg w-full max-w-none h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">{slides[currentSlide].caption}</h1>
          <p className="text-xl mt-2">{slides[currentSlide].subCaption}</p>
          {slides[currentSlide].tagline && <p className="text-lg mt-2 font-semibold">{slides[currentSlide].tagline}</p>}
          <Link to="/contact" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600">Who We Are</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            At <span className="font-semibold">Nexora</span>, we redefine digital experiences through cutting-edge solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600">Our Services</h2>
          <p className="text-gray-700 mt-4">Explore our innovative solutions that drive business success.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
          <Link to="/services" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition">View All Services</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Case Studies Section */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600">Our Case Studies</h2>
          <p className="text-gray-700 mt-4">See how we've transformed businesses with our solutions.</p>

          {/* Filters */}
          <div className="mt-6 flex justify-center space-x-4">
            <button className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300">
              <FaFilter /> All
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300">
              <FaBriefcase /> AI & Automation
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300">
              <FaBriefcase /> Web Development
            </button>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                <img src={study.image} alt={study.title} className="rounded-lg mb-4 w-full h-40 object-cover" />
                <h3 className="text-xl font-semibold text-gray-800">{study.title}</h3>
                <p className="text-blue-600 font-medium">{study.category}</p>
                <p className="text-gray-600 mt-2">{study.description}</p>
                <Link to={study.link} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">View Case Study</Link>
              </div>
            ))}
          </div>

          <Link to="/case-studies" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition">
            Explore More
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
