import React, { useState } from "react";
import { FaSearch, FaBriefcase, FaMapMarkerAlt, FaTimes, FaFilter } from "react-icons/fa";

const Careers = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filter, setFilter] = useState("All");

    const jobPostings = [
        { 
            id: 1, 
            title: "Software Engineer", 
            location: "Mumbai, India", 
            description: "Develop and maintain web applications using React and Node.js.", 
            status: "Closed",
            posted: "3 days ago"
        },
        { 
            id: 2, 
            title: "Project Manager", 
            location: "Pune, India", 
            description: "Manage project timelines, deliverables, and cross-functional teams.", 
            status: "Closed",
            posted: "1 week ago"
        },
        { 
            id: 3, 
            title: "React Developer", 
            location: "Bangalore, India", 
            description: "Develop UI components with React and integrate with APIs.", 
            status: "Currently Open",
            posted: "Recently Posted (Last 24 Hours)"
        }
    ];

    // Sort jobs: Open Positions → Recently Posted → Closed Positions
    const sortedJobs = [...jobPostings].sort((a, b) => {
        const order = { "Currently Open": 1, "Recently Posted (Last 24 Hours)": 2, "Closed": 3 };
        return order[a.status] - order[b.status];
    });

    // Filter logic
    const filteredJobs = sortedJobs.filter(job => {
        return (
            (searchQuery === "" || 
                job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                job.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
            (filter === "All" || 
                (filter === "Closed Positions" && job.status === "Closed") ||
                (filter === "Currently Open Positions" && job.status === "Currently Open") ||
                (filter === "Recently Posted (Last 24 Hours)" && job.posted === "Recently Posted (Last 24 Hours)"))
        );
    });

    return (
        <section className="p-8 text-center bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Careers</h1>

            {/* No Career Opportunities Message */}
            <p className="text-lg text-gray-700 mb-6">
                No new career opportunities available at the moment.
            </p>

            {/* Search & Filters Container */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
                
                {/* Search Bar */}
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search job titles, locations..."
                        className="w-full p-3 border rounded-lg pl-10 pr-10"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    {searchQuery && (
                        <button 
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500"
                            onClick={() => setSearchQuery("")}
                        >
                            <FaTimes />
                        </button>
                    )}
                </div>

                {/* Filter Dropdown */}
                <div className="relative">
                    <select
                        className="p-3 border rounded-lg w-60 cursor-pointer appearance-none bg-white text-gray-700"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="All">All Job Listings</option>
                        <option value="Recently Posted (Last 24 Hours)">Recently Posted (Last 24 Hours)</option>
                        <option value="Currently Open Positions">Currently Open Positions</option>
                        <option value="Closed Positions">Closed Positions</option>
                    </select>
                    <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
            </div>

            {/* Job Listings - Side by Side */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map(job => (
                        <div key={job.id} className="bg-white p-6 shadow-lg rounded-lg text-left">
                            <h2 className="text-2xl font-semibold flex items-center gap-2">
                                <FaBriefcase className="text-blue-600" /> {job.title}
                            </h2>
                            <p className="flex items-center text-gray-600 mt-1">
                                <FaMapMarkerAlt className="text-red-500 mr-2" /> {job.location}
                            </p>
                            <p className="text-gray-700 mt-2">{job.description}</p>
                            <span className={`font-semibold block mt-3 ${job.status === "Closed" ? "text-red-500" : "text-green-500"}`}>
                                {job.status}
                            </span>
                            <p className="text-gray-500 mt-1">{job.posted}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 col-span-2 text-center">No matching jobs found.</p>
                )}
            </div>
        </section>
    );
};

export default Careers;
