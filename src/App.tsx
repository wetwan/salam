
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className=" relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <div className="z-0 min-h-screen bg-blue-500"></div>
    </main>
  );
};

export default App;
