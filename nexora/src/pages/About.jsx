import React from "react";
import { FaThumbsUp, FaLightbulb, FaUsers } from "react-icons/fa";


const About = () => {
    return (
        <section className="p-8 text-center">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-4 text-lg text-gray-700">
                The future belongs to those who dare to innovate, and at Nexora, we are shaping that future—one
                breakthrough at a time.
            </p>
            <p className="mt-4 text-lg text-gray-700 text-justify">
                Born from a vision to merge technology with accountability, Nexora was founded on a simple yet
                powerful belief: small details create big transformations. What started as a quest to track and
                optimize financial decisions soon evolved into something far greater-a movement to empower businesses
                and industries with cutting-edge digital solutions.
            </p>
            <p className="mt-4 text-lg text-gray-700 text-justify">
                As software engineers, we recognized that data is the key to progress. We harnessed the power of AI,
                Data Analytics, and Business Intelligence to bring clarity to numbers, enabling organizations to make
                informed decisions. From developing intelligent financial tracking tools to crafting seamless e-business
                applications, our solutions go beyond efficiency-they redefine possibilities.
            </p>
            <p className="mt-4 text-lg text-gray-700 text-justify">
                But Nexora is more than just technology. We are architects of the digital era, building a future
                where every business, regardless of size, has access to advanced tools that drive growth, resilience,
                and transformation. We don't just solve problems-we engineer solutions that shape tomorrow.
            </p>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
                <div className="p-6 shadow-md rounded-lg bg-white">
                    <h2 className="text-2xl font-semibold text-blue-600">Our Mission</h2>
                    <p className="mt-2">To drive innovation and create seamless digital experiences for businesses worldwide.</p>
                </div>
                <div className="p-6 shadow-md rounded-lg bg-white">
                    <h2 className="text-2xl font-semibold text-blue-600">Our Vision</h2>
                    <p className="mt-2">To be the leading platform that transforms possibilities into digital realities.</p>
                </div>
                <div className="p-6 shadow-md rounded-lg bg-white">
                    <h2 className="text-2xl font-semibold text-blue-600">Our Values</h2>
                    <p className="mt-2">Innovation, Excellence, Integrity, and Customer-Centricity.</p>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="max-w-4xl mx-auto mt-16 text-center">
                <h2 className="text-3xl font-bold text-blue-600">Why Choose Us?</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
                    <div className="p-6 bg-white shadow-md rounded-lg text-center">
                        <FaThumbsUp className="text-blue-600 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold">Proven Expertise</h3>
                        <p className="mt-2 text-gray-700 text-sm">With years of experience, our team delivers innovative and effective solutions for businesses of all sizes.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg text-center">
                        <FaLightbulb className="text-green-600 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold">Innovative Approach</h3>
                        <p className="mt-2 text-gray-700 text-sm">We stay ahead of trends and leverage cutting-edge technologies to keep you competitive.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded-lg text-center">
                        <FaUsers className="text-red-600 text-4xl mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold">Customer-Centric</h3>
                        <p className="mt-2 text-gray-700 text-sm">We prioritize client success, offering personalized services and ongoing support.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;