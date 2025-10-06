import AboutUs from "../Featured/Home/AboutUs";
import NewUser from "../ui/NewUser";
import WhyChooseUs from "../ui/WhyChooseUs";
import HeroBackground from "./../ui/Hero";

function Homepage() {
  return (
    <>
      <div className="h-[100dvh]  mt-20">
        <HeroBackground />
      </div>
      <WhyChooseUs />
      <AboutUs />
      <NewUser />
    </>
  );
}

export default Homepage;
