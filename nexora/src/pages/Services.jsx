import React, { useState, useEffect, useRef } from "react";
import { FaChartLine, FaLaptopCode, FaShieldAlt, FaDatabase, FaSearch, FaHeadset } from "react-icons/fa";

const testimonials = [
    { text: "Nexora transformed our business operations with their cutting-edge solutions. Highly recommended!", name: "John Doe, CEO of TechCorp", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { text: "Their support team is outstanding! Nexora helped us scale effortlessly.", name: "Sarah Smith, Founder of InnovateX", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { text: "From security to analytics, Nexora exceeded our expectations.", name: "Michael Lee, CTO of SecureNet", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { text: "Excellent service and attention to detail. They truly understand business needs.", name: "Emily Johnson, Director at MarketFlow", image: "https://randomuser.me/api/portraits/women/4.jpg" }
];

const Services = () => {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);
    const sliderRef = useRef(null);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth >= 1024) setVisibleCount(3);  // 3 items for desktop
            else if (window.innerWidth >= 768) setVisibleCount(2);  // 2 items for tablet
            else setVisibleCount(1);  // 1 item for mobile
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="p-8 w-screen bg-white">
            {/* Introduction */}
            <div className="max-w-4xl mx-auto text-center mt-12 px-6">
                <h2 className="text-3xl font-bold text-blue-600">Innovative Solutions Tailored for Growth</h2>
                <p className="mt-4 text-lg text-gray-700 text-justify">
                    At Nexora, we believe in harnessing the power of technology to transform businesses, enhance efficiency, and drive innovation. Our expertise spans across diverse industries, delivering cutting-edge solutions that empower businesses to thrive in the digital landscape.
                </p>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                {[
                    { title: "Business Insights", icon: <FaChartLine className="text-blue-600 text-4xl mr-4" />, desc: "Empowering businesses with data-driven intelligence, we deliver actionable insights tailored for individual entrepreneurs and local organizations.", border: "border-blue-600"},
                    { title: "Web Applications", icon: <FaLaptopCode className="text-green-600 text-4xl mr-4" />, desc: "We create dynamic e-business platforms designed to establish a strong online presence and expand global reach.", border: "border-green-600"},
                    { title: "Software Security", icon: <FaShieldAlt className="text-red-600 text-4xl mr-4" />, desc: "Protecting your most sensitive and confidential data is our priority. We implement advanced database security, encryption, and firewall systems.", border: "border-red-600"},
                    { title: "Enterprise Database Solutions", icon: <FaDatabase className="text-purple-600 text-4xl mr-4" />, desc: "We develop scalable, high-performance enterprise data warehouses that integrate and centralize organizational data.", border: "border-purple-600"},
                    { title: "Research-Based Solutions", icon: <FaSearch className="text-yellow-600 text-4xl mr-4" />, desc: "We provide customized, industry-specific solutions backed by in-depth research and analytics.", border: "border-yellow-600"},
                    { title: "24/7 Technical Support", icon: <FaHeadset className="text-indigo-600 text-4xl mr-4" />, desc: "Our commitment extends beyond development. We offer round-the-clock technical support throughout the contract period.", border: "border-indigo-600"}
                ].map((service, index) => (
                    <div key={index} className={`p-6 bg-white shadow-lg rounded-lg border-l-4 ${service.border} flex items-start`}>
                        {service.icon}
                        <div>
                            <h3 className="text-xl text-gray-700 font-semibold">{service.title}</h3>
                            <p className="mt-2 text-gray-700 text-sm">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Testimonials Section */}
            <section className="max-w-5xl mx-auto mt-16 text-center p-6">
                <h2 className="text-3xl font-bold text-blue-600 mb-8">What Our Clients Say</h2>
                <div className="overflow-hidden relative">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
                    >
                        <div className="flex gap-0 sm:gap-4 lg:gap-6 ">
                            {/* Loop through the testimonials and display them */}
                            {testimonials.map((testimonial, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4 max-w-xs sm:max-w-sm lg:max-w-md mx-auto"  // Adjust width based on screen size
                                >
                                    <div className="bg-white shadow-lg rounded-lg border-b-4 border-blue-500 p-6 flex flex-col items-center min-h-[250px]">
                                        <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                                        <p className="text-gray-700 italic">"{testimonial.text}"</p>
                                        <h4 className="mt-4 font-semibold text-gray-700">— {testimonial.name}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Services;