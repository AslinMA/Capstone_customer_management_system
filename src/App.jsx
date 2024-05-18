import "./App.css";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Features from "./component/Features";
import Footer from "./component/Footer";
import Home from "./component/Home";
import IconeLine from "./component/IconeLine";
import SendInquiry from "./component/SendInquiry";
import LoggedHome from "./component/LoggedHome";
import Navbar from "./component/Navbar";
import Tapping from "./component/Tapping";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Bills from "./component/Bills";
import TermsAndConditions from "./component/TermsAndConditions";

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
     
      <SendInquiry/>
      <Login/>
      <SignUp/>
      <Tapping/>
      <Bills/>
      <TermsAndConditions/>
      <IconeLine/>
      <Footer/>
    </>
  );
}

export default App;
