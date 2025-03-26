import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../../assets/NEXORA.png";
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
                closeMenu();
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [menuOpen]);

    return (
        <header className="text-white bg-gray-800 p-4 flex justify-between items-center px-6 max-w-full relative z-50">
            <div className="flex items-center space-x-3">
                <img src={logo} alt="Nexora Logo" className="h-10" />
            </div>

            {/* Toggle button
            <ThemeToggle /> */}

            {/* Desktop Nav */}
            <nav className="hidden md:flex">
                <ul className="flex space-x-6">
                    <li><a href="/" className="hover:text-[#3ec1d5] hover:underline">Home</a></li>
                    <li><a href="/about" className="hover:text-[#3ec1d5] hover:underline">About</a></li>
                    <li><a href="/services" className="hover:text-[#3ec1d5] hover:underline">Services</a></li>
                    <li><a href="/projects" className="hover:text-[#3ec1d5] hover:underline">Projects</a></li>
                    <li><a href="/contact" className="hover:text-[#3ec1d5] hover:underline">Contact</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden menu-button z-50 bg-transparent">
                <FaBars size={24} className="text-white" />
            </button>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out mobile-menu z-50 shadow-lg`}>
                <div className="p-4 flex justify-between items-center border-b border-gray-700">
                    <button onClick={closeMenu} className="text-white bg-transparent">
                        <FaTimes size={24} />
                    </button>
                </div>
                <ul className="flex flex-col items-center justify-center space-y-20 pt-20">
                    <li><a href="/" className="block hover:text-[#3ec1d5] hover:underline" onClick={closeMenu}>Home</a></li>
                    <li><a href="/about" className="block hover:text-[#3ec1d5] hover:underline" onClick={closeMenu}>About</a></li>
                    <li><a href="/services" className="block hover:text-[#3ec1d5] hover:underline" onClick={closeMenu}>Services</a></li>
                    <li><a href="/projects" className="block hover:text-[#3ec1d5] hover:underline" onClick={closeMenu}>Projects</a></li>
                    <li><a href="/contact" className="block hover:text-[#3ec1d5] hover:underline" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;