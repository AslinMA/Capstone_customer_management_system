import "./App.css";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Home from "./component/Home";
import IconeLine from "./component/IconeLine";
import LoggedHome from "./component/LoggedHome";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      {/* ===========================imprte component hear ================================================================*/}

      {/* <h1 className="text-3xl font-bold text-primary">
      Hello world!
    </h1> */}

      <Navbar />
      {/* <Home /> */}
      <LoggedHome/>
      <Features/>
      <About/>
      <ContactUs/>
      <IconeLine/>
      <Footer/>
    </>
  );
}

export default App;
