import { ChakraProvider } from "@chakra-ui/react"
import NavBar from "./components/NavBarComponent";
import Hero from "./components/HeroComponent";
import Benefits from "./components/BenefitsComponent";
import FeaturesList from "./components/FeaturesComponent";
import Testimonials from "./components/TestimonialComponent";
import LogoMarquee from "./components/MarqueeComponent";
import Footer from "./components/FooterComponent";
import FrequentlyAsked from "./components/FaqComponent";
import AboutUs from "./components/AboutUsComponent";
import Process from "./components/ProcessComponent";
import ProductService from "./components/ProductServiceComponent";
// import CaseStudy from "./components/CaseStudyComponent";
import Blog from "./components/BlogComponent";
import Contact from "./components/ContactFormComponent";
import BackToTop from "./components/BackTopButton";
import theme from "../src/styles/theme";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <NavBar />
        <Hero />
        <Benefits />
        <FeaturesList />
        <ProductService />
        <FrequentlyAsked />
        <Process />
        <AboutUs />
        <Testimonials />
        {/* <CaseStudy /> */}
        <LogoMarquee />
        <Blog />
        <Contact />
        <Footer />
        <BackToTop />
      </ChakraProvider>
    </>
  );
}

export default App
