import NavBar from "./components/NavBar";
import ContactSection from "./sections/ContactSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperianceSection";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LeadershipSection from "./sections/LeadershipSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";

const   App = () => {
    return (   
    <>
    <NavBar/>
    < Hero />
    <ShowcaseSection />
    {/* <LogoSection /> */}
    <FeatureCards/>
    <ExperienceSection />
    <EducationSection />
    <LeadershipSection />
    <TechStack />
    <ContactSection />

    <Footer/>

    
    </>
    )
    }
export default App;