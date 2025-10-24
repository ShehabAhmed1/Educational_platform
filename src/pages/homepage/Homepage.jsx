import React from "react";
import Navbar from "../../components/_reusable/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Teachers from "./sections/Teachers";
import Courses from "./sections/Courses";
import HonorWall from "./sections/HonorWall";
import Footer from "../../components/_reusable/Footer";
function Homepage() {
  return (
    <section id="Homepage">
      <Navbar />
      <Hero />
      <Features />
      <Teachers />
      <Courses />
      <HonorWall />
      <Footer />
    </section>
  );
}

export default Homepage;
