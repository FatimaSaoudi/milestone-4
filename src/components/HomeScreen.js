import Hero from "./Hero";
import Campaign from "./Campaign";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Contact from "./Contact";

function HomeScreen() {
  return (
    <div>
        <div>
          <Hero/>
          <Services/>
          <WhyUs/>
          <Campaign/>
          <Contact/>

        </div>
    </div>
  );
}

export default HomeScreen;