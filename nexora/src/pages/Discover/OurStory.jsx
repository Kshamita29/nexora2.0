import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRocket, FaLightbulb, FaCode, FaGlobe } from "react-icons/fa";

const Journey = () => {
    return (
        <section className="p-8 w-screen bg-white">
            {/* Introduction */}
            <div className="max-w-4xl mx-auto text-center mt-12 px-6">
                <h2 className="text-3xl font-bold text-blue-600">Our Journey</h2>
                <p className="mt-4 text-lg text-gray-700 text-justify">
                    Every great innovation begins with a vision. At Nexora, our journey started with a bold idea—to
                    bridge the gap between businesses and cutting-edge technology. What began as a small initiative
                    soon transformed into a movement, shaping industries and redefining digital possibilities.
                </p>
            </div>

            {/* Timeline Section */}
            <div className="max-w-5xl mx-auto mt-12">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "#fff",
                            color: "#000",
                            borderBottom: "4px solid #1E3A8A",
                            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
                        }}
                        contentArrowStyle={{ borderRight: "7px solid #1E3A8A" }}
                        date="August 2023"
                        iconStyle={{ background: "#1E3A8A", color: "#fff" }}
                        icon={<FaLightbulb />}
                    >
                        <h3 className="font-bold text-lg">The Birth of an Idea</h3>
                        <p className="text-sm text-justify">
                            Nexora was conceptualized with the mission to redefine digital experiences. Recognizing the
                            challenges businesses faced in leveraging technology effectively, we envisioned an ecosystem
                            that simplifies innovation.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "#fff",
                            color: "#000",
                            borderBottom: "4px solid #2563EB",
                            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
                        }}
                        contentArrowStyle={{ borderRight: "7px solid #2563EB" }}
                        date="November 2023"
                        iconStyle={{ background: "#2563EB", color: "#fff" }}
                        icon={<FaRocket />}
                    >
                        <h3 className="font-bold text-lg">Turning Vision into Reality</h3>
                        <p className="text-sm text-justify">
                            From the initial prototype to refining our core solutions, Nexora's development gained
                            momentum. We built a strong foundation in AI, data analytics, and digital transformation
                            to cater to real-world challenges.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "#fff",
                            color: "#000",
                            borderBottom: "4px solid #3B82F6",
                            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
                        }}
                        contentArrowStyle={{ borderRight: "7px solid #3B82F6" }}
                        date="February 2024"
                        iconStyle={{ background: "#3B82F6", color: "#fff" }}
                        icon={<FaCode />}
                    >
                        <h3 className="font-bold text-lg">Launch & Early Adoption</h3>
                        <p className="text-sm text-justify">
                            With an MVP ready, Nexora took its first steps into the industry. We onboarded early users,
                            fine-tuned our solutions based on feedback, and strengthened our technological capabilities.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{
                            background: "#fff",
                            color: "#000",
                            borderBottom: "4px solid #60A5FA",
                            boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1)",
                        }}
                        contentArrowStyle={{ borderRight: "7px solid #60A5FA" }}
                        date="Present & Beyond"
                        iconStyle={{ background: "#60A5FA", color: "#fff" }}
                        icon={<FaGlobe />}
                    >
                        <h3 className="font-bold text-lg">Expanding Horizons</h3>
                        <p className="text-sm text-justify">
                            Today, Nexora is scaling new heights, integrating cutting-edge AI capabilities and
                            fostering collaborations worldwide. Our journey is just beginning as we continue to push
                            the boundaries of what's possible in digital transformation.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

            {/* Call-to-Action */}
            <div className="text-center mt-12">
                <h2 className="text-3xl text-black font-bold">Be a Part of Our Story</h2>
                <p className="mt-2 text-lg text-gray-700">Join us as we redefine the future of digital transformation.</p>
                <a href="/contact" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
                    Get in Touch
                </a>
            </div>
        </section>
    );
};

export default Journey;
