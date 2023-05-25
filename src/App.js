import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Photos from "./components/Photos";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Research />
      <Photos />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
