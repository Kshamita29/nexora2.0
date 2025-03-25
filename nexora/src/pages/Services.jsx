import React from "react";
import { FaChartLine, FaLaptopCode, FaShieldAlt, FaDatabase, FaSearch, FaHeadset, FaQuoteLeft } from "react-icons/fa";

const Services = () => {
    return (
        <section className="p-8 w-screen">
            {/* Introduction */}
            <div className="max-w-4xl mx-auto text-center mt-12 px-6">
                <h2 className="text-3xl font-bold text-blue-600">Innovative Solutions Tailored for Growth</h2>
                <p className="mt-4 text-lg text-gray-700 text-justify">
                    At Nexora, we believe in harnessing the power of technology to transform businesses, enhance efficiency, and drive innovation. Our expertise spans across diverse industries, delivering cutting-edge solutions that empower businesses to thrive in the digital landscape.
                </p>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                {/* Business Insights */}
                <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-600 flex items-start">
                    <FaChartLine className="text-blue-600 text-4xl mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold">Business Insights</h3>
                        <p className="mt-2 text-gray-700 text-sm">Empowering businesses with data-driven intelligence, we deliver actionable insights tailored for individual entrepreneurs and local organizations.</p>
                    </div>
                </div>

                {/* Web Applications */}
                <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-green-600 flex items-start">
                    <FaLaptopCode className="text-green-600 text-4xl mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold">Web Applications</h3>
                        <p className="mt-2 text-gray-700 text-sm">We create dynamic e-business platforms designed to establish a strong online presence and expand global reach.</p>
                    </div>
                </div>

                {/* Software Security */}
                <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-red-600 flex items-start">
                    <FaShieldAlt className="text-red-600 text-4xl mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold">Software Security</h3>
                        <p className="mt-2 text-gray-700 text-sm">Protecting your most sensitive and confidential data is our priority. We implement advanced database security, encryption, and firewall systems.</p>
                    </div>
                </div>

                {/* Enterprise Database Solutions */}
                <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-purple-600 flex items-start">
                    <FaDatabase className="text-purple-600 text-4xl mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold">Enterprise Database Solutions</h3>
                        <p className="mt-2 text-gray-700 text-sm">We develop scalable, high-performance enterprise data warehouses that integrate and centralize organizational data.</p>
                    </div>
                </div>

                {/* Research Based Solutions */}
                <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-yellow-600 flex items-start">
                    <FaSearch className="text-yellow-600 text-4xl mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold">Research-Based Solutions</h3>
                        <p className="mt-2 text-gray-700 text-sm">We provide customized, industry-specific solutions backed by in-depth research and analytics.</p>
                    </div>
                </div>

                {/* 24/7 Technical Support */}
                <div className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-indigo-600 flex items-start">
                    <FaHeadset className="text-indigo-600 text-4xl mr-4" />
                    <div>
                        <h3 className="text-xl font-semibold">24/7 Technical Support</h3>
                        <p className="mt-2 text-gray-700 text-sm">Our commitment extends beyond development. We offer round-the-clock technical support throughout the contract period.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="max-w-4xl mx-auto mt-16 text-center">
                <h2 className="text-3xl font-bold text-blue-600">What Our Clients Say</h2>
                <div className="mt-8 space-y-6">
                    <div className="p-6 bg-gray-100 shadow-md rounded-lg">
                        <FaQuoteLeft className="text-blue-600 text-3xl mb-2" />
                        <p className="text-gray-700 italic">"Nexora transformed our business operations with their cutting-edge solutions. Highly recommended!"</p>
                        <h4 className="mt-2 font-semibold">— John Doe, CEO of TechCorp</h4>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-md rounded-lg">
                        <FaQuoteLeft className="text-blue-600 text-3xl mb-2" />
                        <p className="text-gray-700 italic">"Their support team is outstanding! Nexora helped us scale effortlessly."</p>
                        <h4 className="mt-2 font-semibold">— Sarah Smith, Founder of InnovateX</h4>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-md rounded-lg">
                        <FaQuoteLeft className="text-blue-600 text-3xl mb-2" />
                        <p className="text-gray-700 italic">"From security to analytics, Nexora exceeded our expectations."</p>
                        <h4 className="mt-2 font-semibold">— Michael Lee, CTO of SecureNet</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
