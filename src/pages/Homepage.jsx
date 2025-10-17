import AboutUs from "../Featured/Home/AboutUs";
import NewUser from "../ui/NewUser";
import WhyChooseUs from "../ui/WhyChooseUs";
import HeroBackground from "./../ui/Hero";
import Footer from "../ui/Footer"
import HowItWorks from "../ui/HowItWork";
import FeaturedProduct from "../ui/FeaturedProduct";


function Homepage() {
  return (
    <>
      <HeroBackground />
<FeaturedProduct/>
      <WhyChooseUs />
      <AboutUs />

      <HowItWorks />
      <NewUser />
      <Footer />
    </>
  );
}

export default Homepage;
