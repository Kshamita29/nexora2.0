import React from "react";
import logo from "../../assets/NEXORA.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
                {/* Nexora Info */}
                <div>
                    <img src={logo} alt="Nexora Logo" className="h-12 mx-auto md:mx-0" />
                    <p className="mt-2"><i>Elevate. Innovate. Dominate.</i></p>
                    <p className="mt-2 text-justify">
                        We provide technical solutions for multiple sectors such as Education, Ecommerce,
                        Healthcare, Pharma, Retail Construction Manufacturing and other businesses.
                        We are a team of experts who aimed at your next technical innovation.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-2">
                        <FaFacebook className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
                        <FaTwitter className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
                        <FaLinkedin className="text-blue-600 text-2xl cursor-pointer hover:text-blue-800" />
                    </div>
                </div>
                {/* Discover */}
                <div>
                    <h3 className="text-lg font-semibold">Discover</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/our-story" className="hover:text-[#3ec1d5]">Our Story</a></li>
                        <li><a href="/blog" className="hover:text-[#3ec1d5]">Blog</a></li>
                        <li><a href="/careers" className="hover:text-[#3ec1d5]">Careers</a></li>
                    </ul>
                </div>
                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/support" className="hover:text-[#3ec1d5]">Support</a></li>
                        <li><a href="/policies" className="hover:text-[#3ec1d5]">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-[#3ec1d5]">Terms & Conditions</a></li>
                    </ul>
                </div>
                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <ul className="mt-2 space-y-2">
                        <li>Email: contact@nexora.com</li>
                        <li>Phone: +123 456 7890</li>
                        <li>Address: Mumbai, India</li>
                    </ul>
                </div>
            </div>
            <hr className="border-gray-600 my-4" />
            <p className="text-center">&copy; 2023 Nexora. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
