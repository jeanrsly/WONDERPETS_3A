import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Benefits from "../components/Benefits";
import About from "../components/About";
import Why from "../components/Why";
import Quote from "../components/Quote";
import Location from "../components/Location";
import Contactdetails from "../components/Contactdetails"


export default function rescuepup() {
  return (
    <div>
      <section id="main">
        <Navbar />
        <Main />
      </section>     
      <section id="about">
        <About />
      </section>     
      <section id="why">
        <Why />
      </section>   
      <section id="benefits">
        <Benefits />
        <Quote />
      </section> 
      <section id="location">
        <Location />
        <Contactdetails />
      </section>     
    </div>
  );
}
