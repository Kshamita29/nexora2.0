import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCode, FaLightbulb, FaChartLine, FaCog } from "react-icons/fa";
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
  { icon: <FaCode className="text-red-500 text-5xl mx-auto" />, title: "Web & App Development", description: "We build dynamic, scalable, and high-performance web & mobile applications tailored to your needs." },
  { icon: <FaLightbulb className="text-yellow-500 text-5xl mx-auto" />, title: "AI & Automation", description: "Leveraging AI to enhance efficiency and automate business processes seamlessly." },
  { icon: <FaChartLine className="text-green-500 text-5xl mx-auto" />, title: "Business Intelligence", description: "Transform data into actionable insights with our BI solutions to drive growth." },
  { icon: <FaCog className="text-purple-500 text-5xl mx-auto" />, title: "Custom Software Solutions", description: "Bespoke software solutions designed to meet your unique business requirements." }
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
    image: "https://picsum.photos/200",
    link: "/case-studies/data-analytics"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Slide change interval of 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-screen h-screen flex items-center justify-center text-center text-white bg-black">
        <div className="absolute inset-0">
          <img
            src={slides[currentSlide].image}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">{slides[currentSlide].caption}</h1>
          <p className="text-xl mt-2">{slides[currentSlide].subCaption}</p>
          {/* Get in Touch Button */}
          <Link
            to="/contact"
            className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600">Who We Are</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            At <span className="font-semibold">Nexora</span>, we redefine digital experiences through cutting-edge solutions. 
            Our team is dedicated to delivering innovative and scalable technology that empowers businesses to succeed in a rapidly evolving landscape.
            Whether it's web development, AI-driven automation, or business intelligence, we bring expertise and passion to every project.
          </p>
          <Link to="/about" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition">
            Learn More
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600">Our Services</h2>
          <p className="text-gray-700 mt-4">Explore our innovative solutions that drive business success.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            ))}
          </div>
          <Link to="/services" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-blue-600 transition">View All Services</Link>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-6 bg-white text-center w-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600">Our Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                <img src={study.image} alt={study.title} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{study.title}</h3>
                <p className="text-gray-600 mt-2">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-6 text-center w-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md text-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-md mx-auto" />
                <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                <h3 className="text-xl font-semibold mt-4 text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
