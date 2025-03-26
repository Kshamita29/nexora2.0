import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [hovered, setHovered] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .send("service_42u6xi8", "template_y2modhi", formData, "AML7JqYqXdDX3KtLq")
            .then(() => {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => setStatus("Failed to send message. Please try again."));
    };

    return (
        <section className="relative w-screen min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-12">
            {/* Social Media & Contact Icons on Right */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-4">
                <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg" onMouseEnter={() => setHovered('phone')} onMouseLeave={() => setHovered(null)}>
                    <FaPhone className="text-blue-600 text-2xl cursor-pointer" />
                    {hovered === 'phone' && <span className="absolute right-full mr-2 bg-white text-black text-sm px-2 py-1 rounded shadow w-40">+91 98765 43210</span>}
                </div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg" onMouseEnter={() => setHovered('location')} onMouseLeave={() => setHovered(null)}>
                    <FaMapMarkerAlt className="text-blue-600 text-2xl cursor-pointer" />
                    {hovered === 'location' && <span className="absolute right-full mr-2 bg-white text-black text-sm px-2 py-1 rounded shadow w-32">Mumbai, India</span>}
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
                    <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
                    <FaTwitter className="text-blue-600 text-2xl cursor-pointer" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
                    <FaLinkedin className="text-blue-600 text-2xl cursor-pointer" />
                </div>
            </div>
            
            {/* Contact Form Section */}
            <div className="relative bg-white shadow-2xl rounded-xl p-8 w-1/3 z-10">
                <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">Send a Message</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500" required></textarea>
                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
                </form>
                {status && <p className="mt-4 text-green-600 font-semibold text-center">{status}</p>}
            </div>
        </section>
    );
};

export default Contact;
