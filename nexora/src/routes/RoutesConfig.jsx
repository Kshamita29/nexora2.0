import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../componets/Layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import OurStory from "../pages/Discover/OurStory"
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import ContactUs from "../pages/Contact";
import Support from "../pages/Quick Links/Support";
import PrivatePolicies from "../pages/Quick Links/PrivatePolicies"
import TermsAndConditions from "../pages/Quick Links/TermsNConditions";
import BlogPage from "../pages/Discover/Blog";
import Careers from "../pages/Discover/Careers";
import Error404 from "../pages/Error404";


const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/services" element={<Services />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/policies" element={<PrivatePolicies />}/>
        <Route path="/terms" element={<TermsAndConditions />}/>
        <Route path="/blog" element={<BlogPage />}/>
        <Route path="/careers" element={<Careers />}/>
        <Route path="/404" element={<Error404 />}/>
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
