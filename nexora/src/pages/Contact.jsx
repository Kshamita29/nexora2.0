import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

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
        <section className="p-8 w-screen text-center bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl w-full flex flex-col md:flex-row">
                {/* Contact Details */}
                <div className="md:w-1/2 p-4 text-left">
                    <h2 className="text-2xl font-semibold text-blue-600">Get In Touch</h2>
                    <p className="text-gray-700 mt-2">Reach out to us for any queries or collaborations.</p>
                    <div className="mt-4 space-y-4">
                        <p className="flex items-center text-gray-700">
                            <FaMapMarkerAlt className="text-blue-600 mr-2" /> Mumbai, India
                        </p>
                        <p className="flex items-center text-gray-700">
                            <FaEnvelope className="text-blue-600 mr-2" /> kshamita2920@gmail.com
                        </p>
                        <p className="flex items-center text-gray-700">
                            <FaPhone className="text-blue-600 mr-2" /> +91 98765 43210
                        </p>
                    </div>
                    {/* Social Media */}
                    <div className="mt-6 flex space-x-4">
                        <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
                        <FaTwitter className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
                        <FaLinkedin className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
                    </div>
                </div>
                
                {/* Contact Form */}
                <div className="md:w-1/2 p-4">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="Your Name" 
                            className="w-full p-3 border rounded-lg" 
                            required 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Your Email" 
                            className="w-full p-3 border rounded-lg" 
                            required 
                        />
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            placeholder="Your Message" 
                            className="w-full p-3 border rounded-lg h-32" 
                            required
                        ></textarea>
                        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
                    </form>
                    {status && <p className="mt-4 text-green-600 font-semibold">{status}</p>}
                </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 w-full max-w-4xl">
                <iframe
                    className="w-full h-64 rounded-lg shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30283.46078817294!2d72.81966538550247!3d19.07283922968762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceff6e7fc721%3A0x9c4a1c4b39b5a098!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1711482181234!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};

export default Contact;