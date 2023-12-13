import Navbar from "@/components/modules/Navbar/Navbar";
import About from "@/components/template/About/About";
import AboutBox from "@/components/template/AboutBox/AboutBox";
import Header from "@/components/template/Header/Header";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <AboutBox/>
    </>
  )
}
