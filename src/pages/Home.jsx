// import React from "react";
// import Header from "../components/Header";
// import Hero from "../components/RestaurantCard";
// import ProductShowcase from "../components/Menu";
// import Features from "../components/OurChefs";
// import Menu from "../components/MenuItem";
// import Testimonials from "../components/Testimonials";
// import Footer from "../components/Footer";
// import CaseStudies from "../components/CaseStories";
// import Galary from "../pages/FoodGalary";
// import AboutUs from "../components/About";
// import WhyChoose from "../components/WhyChoose";
// import Service from "../components/Services";
// import H from "../components/Hero";
// import Navbar from "../components/Navbar";
// import Visionair from "../components/VisionMission.jsx";
// import Specifications from "../components/Specifications.jsx";
// import Specificationair from "../components/Specificationiar.jsx";
// import FastFood from "../pages/FastFood.jsx";


// function App() {
//   return (
//     <div className="bg-white text-black font-sans">
//       {/* <Navbar/> */}
//       {/* <H/> */}
//       <Header />
//       <AboutUs/>
//       <Visionair/>
//       <Specifications/>
//       <Specificationair/>
//       {/* <Hero /> */}
//       <ProductShowcase />
//       <Features />
//       {/* <Menu/> */}
//       <Testimonials/>
//       {/* <CaseStudies/> */}
//       <Galary/>
      
//       {/* <WhyChoose/> */}
//       {/* <Service/> */}
//       <FastFood/>
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;





import React from "react";

// import AboutUs from "../components/About";
// import Visionair from "../components/VisionMission";
// import Specifications from "../components/Specifications";
// import Specificationair from "../components/Specificationiar";
import ProductShowcase from "../components/Menu";
import Features from "../components/OurChefs.jsx";
import Testimonials from "../components/Testimonials";
import Galary from "./FoodGalary";
import End from "../components/VisitUs.jsx";
// import CaseStories from "../components/ProductShowcase.jsx";
import ChefSpecial from "../components/MenuItem.jsx";
import Hero from "../components/Hero.jsx";
import OurStorySection from "../components/OurStory.jsx";
import CheafsImpression from "../components/ChefImpression.jsx";
// import ChefImpressiont from "../components/ChefImpressiont.jsx";

function Home() {
  return (
    <div>
      <Hero/>
      <OurStorySection/>
      {/* <AboutUs /> */}
      
     
      <ProductShowcase />
      <Features />
      {/* <Galary /> */}
      <ChefSpecial/>
      {/* <CaseStories/> */}
    
      <CheafsImpression/>
      {/* <ChefImpressiont/> */}
        <Testimonials />
      <End/>
     
    </div>
  );
}

export default Home;
