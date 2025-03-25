import About from "./components/About";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Store from "./components/Store";

const App = () => {
  return (
    <main className=" relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Store />
      <Contact />
    </main>
  );
};

export default App;
