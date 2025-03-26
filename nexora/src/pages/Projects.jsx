import React from "react";
import { FaCode, FaMobileAlt, FaDatabase, FaCloud, FaUtensils, FaGlobe } from "react-icons/fa";

const projects = [
    {
        name: "AI Chatbot",
        description: "An AI-powered chatbot that enhances customer interactions with real-time responses.",
        icon: <FaCode className="text-blue-600 text-5xl" />, 
    },
    {
        name: "E-commerce App",
        description: "A full-stack e-commerce solution with seamless shopping experience and secure transactions.",
        icon: <FaMobileAlt className="text-green-600 text-5xl" />,
    },
    {
        name: "Cloud Storage System",
        description: "A scalable cloud storage platform ensuring secure and fast data access.",
        icon: <FaCloud className="text-purple-600 text-5xl" />,
    },
    {
        name: "Enterprise Database",
        description: "A high-performance enterprise-level database system optimized for big data analytics.",
        icon: <FaDatabase className="text-red-600 text-5xl" />,
    },
    {
        name: "Culinary Crescendo",
        description: "A dynamic restaurant website designed for seamless reservations and menu exploration.",
        icon: <FaUtensils className="text-yellow-600 text-5xl" />,
    },
    {
        name: "Vista Voyages",
        description: "A tour website offering easy travel planning and personalized recommendations.",
        icon: <FaGlobe className="text-indigo-600 text-5xl" />,
    }
];

const Projects = () => {
    return (
        <section className="p-8 text-center w-screen bg-white">
            <h1 className="text-4xl font-bold">Our Projects</h1>
            <p className="mt-4 text-lg text-gray-700">Discover some of our innovative projects that redefine digital transformation.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-600 flex flex-col items-center text-center">
                        <div className="mb-4 flex justify-center">
                            {project.icon}
                        </div>
                        <h3 className="text-xl text-gray-700 font-semibold">{project.name}</h3>
                        <p className="mt-2 text-gray-700 text-sm">{project.description}</p>
                        <a href="/404" className="mt-4 text-blue-600 underline">Learn More</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;