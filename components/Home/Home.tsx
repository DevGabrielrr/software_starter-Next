import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "./About/About";
import WhyChoose from "./WhyChoose/WhyChoose";
import Software from "./Software/Software";
import Project from "./Project/Project";
import Review from "./Review/Review";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Software />
      <Project />
      <Review />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
