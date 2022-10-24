import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import Expreience from "./components/page/Expreience";
import Home from "./components/page/Home";
import Services from "./components/page/Services";

function App() {
  return (
      <> 
        <Header/>
        <Home/>
        <About/>
        <Expreience/>
        <Services/>
        <Contact/>
        <Footer/>
      </>
  );
}

export default App;
