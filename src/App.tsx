import { NavigationBar } from "./parts/NavigationBar";
import { Hero } from "./parts/Hero";
import { About } from "./parts/About";
import { Services } from "./parts/Services";
import { Contact } from "./parts/Contact";
import { Vision } from "./parts/Vision";
import { Choose } from "./parts/Choose";
function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <hr className="border-[#3e8dc8] border-[1.5px]" />
      <Services />
      <hr className="border-[#3e8dc8] border-[1.5px]" />
      <Vision />
      <hr className="border-[#3e8dc8] border-[1.5px]" />
      <Choose />
      <hr className="border-[#3e8dc8] border-[1.5px]" />
      <Contact />
    </>
  );
}

export default App;
