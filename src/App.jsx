import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// Pages
import Home from "./pages/Home";
import FastFood from "./pages/FastFood";
import CasualDining from "./pages/CasualDining";
import CafesBakeries from "./pages/Bakery";
import Desserts from "./pages/Desserts";
import Beverages from "./pages/Beverages";
import Mains from "./pages/Mains";
import Starters from "./pages/Starts";
import FoodGallery from "./pages/FoodGalary";
import Chefs from "./components/OurChefs";
import About from "./components/OurStory";
import PrivacyPolicy from "./pages/Privacy";
import TermsOfService from "./pages/Terms";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";

// Admin Pages
import Login from "./Admin/Login.jsx";
import SignUp from "./Admin/SignUp.jsx";
import AdminPanel from "./Admin/AdminPanel.jsx";
import LookbookAdmin from "./Admin/LookbookAdmin.jsx";

function Layout({ children }) {
  const location = useLocation();
  const hideLayout = ["/login", "/signup", "/admin", "/admin-lookbook"].includes(location.pathname);

  return (
    <div className="bg-white text-black font-sans">
      <ScrollToTop />
      {!hideLayout && <Navbar key={location.pathname} />}
      <div className="min-h-screen">{children}</div> {/* Ensure content doesn't collapse */}
      {!hideLayout && (
        <>
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fast-food" element={<FastFood />} />
          <Route path="/casual-dining" element={<CasualDining />} />
          <Route path="/cafes-bakeries" element={<CafesBakeries />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/mains" element={<Mains />} />
          <Route path="/starters" element={<Starters />} />
          <Route path="/food-gallery" element={<FoodGallery />} />
          <Route path="/our-chefs" element={<Chefs />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Admin Pages */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin-lookbook" element={<LookbookAdmin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;