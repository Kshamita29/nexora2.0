import React from "react";
import { Link } from "react-router-dom";

const blogs = [
    {
        id: 1,
        title: "The Future of AI in Web Development",
        description: "Explore how AI is revolutionizing web development with automation, intelligent design, and predictive analytics.",
        link: "/blog/ai-web-development"
    },
    {
        id: 2,
        title: "Top 10 UI/UX Design Trends in 2025",
        description: "Discover the latest UI/UX design trends shaping the future of user experience and interface design.",
        link: "/blog/ui-ux-trends-2025"
    },
    {
        id: 3,
        title: "How to Optimize React Apps for Performance",
        description: "Learn essential tips and tricks to boost the performance of your React applications for a seamless user experience.",
        link: "/blog/react-performance-optimization"
    }
];

const BlogPage = () => {
    return (
        <section className="p-8 text-center bg-gray-100 min-h-screen w-screen">
            <h1 className="text-4xl text-blue-600 font-bold mb-6">Our Blog</h1>
            <div className="max-w-4xl mx-auto space-y-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white p-6 shadow-lg rounded-lg text-left">
                        <h2 className="text-2xl font-semibold text-gray-600 mb-2">{blog.title}</h2>
                        <p className="text-gray-700 mb-4">{blog.description}</p>
                        <Link 
                            to={blog.link} 
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BlogPage;
