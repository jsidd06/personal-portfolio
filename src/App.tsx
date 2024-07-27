import "./app.scss";
import ContactComp from "./container/screens/contact/Contact";
import CursorComp from "./container/screens/cursor/Cursor";
import HomeComp from "./container/screens/Home/HomeComp";
import NavBarScreen from "./container/screens/navbar/navbar";
import ParallaxComp from "./container/screens/Parallax/Parallax";
import PortfolioComp from "./container/screens/Portfolio/Portfolio";
import ServicesComp from "./container/screens/services/Services";

function App() {
  return (
    <>
      <div>
        <CursorComp />
        <section id="HomePage">
          <NavBarScreen />
          {/* <HomeComp /> */}
        </section>
        <section id="Services">
          {/* <ParallaxComp type="services" /> */}
        </section>
        <section>{/* <ServicesComp /> */}</section>
        <section id="Portfolio">
          {/* <ParallaxComp type="portfolio" /> */}
        </section>
        {/* <PortfolioComp /> */}
        <section id="Contact">{/* <ContactComp /> */}</section>
      </div>
    </>
  );
}

export default App;
