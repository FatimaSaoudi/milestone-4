import Hero from "./Hero";
import Campaign from "./Campaign";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Contact from "./Contact";

function HomeScreen() {
  return (
    <div>
        <div className="container">
          <Hero/>
          <Campaign/>
          <Services/>
          <WhyUs/>
          <Contact/>

        </div>
    </div>
  );
}

export default HomeScreen;