import Navbar from "@/components/modules/Navbar/Navbar";
import About from "@/components/template/About/About";
import AboutBox from "@/components/template/AboutBox/AboutBox";
import Header from "@/components/template/Header/Header";
import Services from "@/components/template/Services/Services";
import SampleWork from "@/components/template/sampleWork/sampleWork";
import Teams from "@/components/template/Teams/Teams";
import Prices from "@/components/template/Prices/Prices";
import News from "@/components/template/News/News";
import Contact from "@/components/template/Contact/Contact";
import Footer from "@/components/template/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <AboutBox/>
      <Services/>
      <SampleWork/>
      <Teams/>
      <Prices/>
      <News/>
      <Contact/>
      <Footer/>
    </>
  )
}
