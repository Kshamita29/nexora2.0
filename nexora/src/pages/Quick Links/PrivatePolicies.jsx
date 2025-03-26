import React from "react";

const PrivacyPolicy = () => {
    return (
        <section className="p-8 text-center w-screen bg-gray-100 min-h-screen">
            <h1 className="text-4xl text-black font-bold mb-6">Privacy Policy</h1>
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl mx-auto text-left">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Introduction</h2>
                <p className="text-gray-700 mb-4">
                    Welcome to Nexora. Your privacy is important to us. This Privacy Policy explains how we collect,
                    use, and protect your personal information when you use our services.
                </p>
                
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Information We Collect</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Personal Information: Name, email address, phone number, etc.</li>
                    <li>Usage Data: Information on how you interact with our services.</li>
                    <li>Cookies and Tracking Technologies to improve user experience.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>To provide and improve our services.</li>
                    <li>To respond to your inquiries and provide customer support.</li>
                    <li>For marketing and promotional purposes.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Data Protection & Security</h2>
                <p className="text-gray-700 mb-4">
                    We implement industry-standard security measures to protect your personal data from unauthorized access,
                    disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
                
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Your Rights</h2>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>You have the right to access, modify, or delete your personal data.</li>
                    <li>You may opt out of marketing communications at any time.</li>
                    <li>For any requests, contact us at privacy@nexora.com.</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">Changes to this Policy</h2>
                <p className="text-gray-700 mb-4">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                    Your continued use of our services constitutes acceptance of these changes.
                </p>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
