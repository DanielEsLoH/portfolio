import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav />
      <Banner />
      <About />
      <Services />
      <Projects/>
    </div>
  );
};

export default App;