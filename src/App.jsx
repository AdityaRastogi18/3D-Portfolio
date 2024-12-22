import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
import InfiniteScroll from "./components/InfiniteScroll";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <InfiniteScroll />
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
