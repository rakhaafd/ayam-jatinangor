import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PopularDishes from "./components/PopularDishes";
import Service from "./components/Service";
import KeyFeatures from "./components/KeyFeatures";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App(){
  return (
    <>
    <Navbar />
    <Hero />
    <PopularDishes />
    <Service />
    <KeyFeatures />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}