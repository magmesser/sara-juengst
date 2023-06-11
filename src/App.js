import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Research from "./components/Research";
import Photos from "./components/Photos";
import Publications from "./components/Publications";
import News from "./components/News";
// import Students from "./components/Students";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Research />
      <Photos />
      <Publications />
      <News />
      {/* <Students /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
