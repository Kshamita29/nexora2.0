import React from "react";

const TermsAndConditions = () => {
    return (
        <section className="p-8 text-left bg-gray-100 min-h-screen">
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>
                
                <p className="text-gray-700 mb-4">
                    Welcome to Nexora! These terms and conditions outline the rules and regulations for the use of our website and services.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600 mt-6">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                    By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Nexora if you do not agree to all the terms and conditions stated on this page.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600 mt-6">2. Intellectual Property Rights</h2>
                <p className="text-gray-700 mb-4">
                    Unless otherwise stated, Nexora and/or its licensors own the intellectual property rights for all material on Nexora. All intellectual property rights are reserved.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600 mt-6">3. Restrictions</h2>
                <p className="text-gray-700 mb-4">
                    You are specifically restricted from:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Publishing any website material in any media without permission.</li>
                    <li>Using this website in any way that is damaging.</li>
                    <li>Engaging in any data mining or similar activities.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-blue-600 mt-6">4. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                    In no event shall Nexora, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.
                </p>

                <h2 className="text-2xl font-semibold text-blue-600 mt-6">5. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                    Nexora reserves the right to revise these terms at any time. By using this website, you are expected to review these terms on a regular basis.
                </p>
            </div>
        </section>
    );
};

export default TermsAndConditions;