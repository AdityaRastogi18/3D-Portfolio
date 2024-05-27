import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import InfiniteScroll from "./components/InfiniteScroll";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        </div> */}
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <InfiniteScroll />
        {/* <Tech /> */}
        <Works />
        <Feedbacks />
        <StarsCanvas />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
