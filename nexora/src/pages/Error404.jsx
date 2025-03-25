import React from "react";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 px-6">
            <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
            <h1 className="text-5xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mt-2">Oops! Page Not Found</h2>
            <p className="text-gray-500 mt-4 max-w-md">
                The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
            </p>
            <button 
                onClick={() => navigate("/")}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
            >
                <FaHome /> Go Back Home
            </button>
        </section>
    );
};

export default Error404;
