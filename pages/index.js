import Navbar from "@/components/modules/Navbar/Navbar";
import About from "@/components/template/About/About";
import AboutBox from "@/components/template/AboutBox/AboutBox";
import Header from "@/components/template/Header/Header";
import Services from "@/components/template/Services/Services";
import SampleWork from "@/components/template/sampleWork/sampleWork";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <AboutBox/>
      <Services/>
      <SampleWork/>
    </>
  )
}
