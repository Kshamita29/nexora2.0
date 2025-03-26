import React, { useState } from "react";
import { FaPaperPlane, FaPlus, FaMinus } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Support = () => {
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send(
            "service_42u6xi8", // Replace with your EmailJS service ID
            "template_bntxb5j", // Replace with your EmailJS template ID
            { user_email: email, message: feedback, to_email: "kshamita2920@gmail.com" },
            "AML7JqYqXdDX3KtLq" // Replace with your EmailJS public key
        ).then(
            () => {
                setSubmitted(true);
                setEmail("");
                setFeedback("");
                setTimeout(() => setSubmitted(false), 3000);
            },
            (error) => {
                console.error("Failed to send query:", error);
            }
        );
    };

    return (
        <section className="p-8 text-center w-screen bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Support & FAQs</h1>
            
            {/* FAQs Section */}
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Frequently Asked Questions</h2>
                <div className="text-left space-y-4">
                    {[
                        { question: "How do I contact customer support?", answer: "You can reach us via email at support@nexora.com or call us at +91 98765 43210." },
                        { question: "What services do you offer?", answer: "We provide AI-driven solutions, software development, and business intelligence services." },
                        { question: "Do you offer refunds?", answer: "Refunds are subject to our terms and conditions. Please check our refund policy for details." }
                    ].map((faq, index) => (
                        <div key={index} className="border-b pb-2">
                            <button 
                                onClick={() => toggleFAQ(index)}
                                className="text-lg font-semibold w-full text-left focus:outline-none flex justify-between items-center"
                            >
                                {faq.question}
                                {openFAQ === index ? <FaMinus className="text-blue-600" /> : <FaPlus className="text-blue-600" />}
                            </button>
                            {openFAQ === index && <p className="text-gray-700 mt-2">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Didn't find your query? */}
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto mt-8">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Didn't find your query?</h2>
                <p className="text-gray-700 mb-4">Let us know your question, and we’ll get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email..."
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Enter your query here..."
                        className="w-full p-3 border rounded-lg h-32"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                    >
                        <FaPaperPlane /> Submit Query
                    </button>
                </form>
                {submitted && <p className="text-green-600 mt-4">Thank you! We’ll respond to your query soon.</p>}
            </div>
        </section>
    );
};

export default Support;
