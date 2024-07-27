import "./app.scss";
import ContactComp from "./container/screens/contact/Contact";
import CursorComp from "./components/cursor/Cursor";
import HomeScreen from "./container/screens/Home/HomeScreen";
import NavBarScreen from "./container/screens/navbar/navbar";
import PortfolioComp from "./container/screens/Portfolio/Portfolio";
import ParallaxScreen from "./container/screens/Parallax/Parallax";
import ServicesScreen from "./container/screens/services/Services";

function App() {
  return (
    <>
      <div>
        <CursorComp />
        <section id="HomePage">
          <NavBarScreen />
          <HomeScreen />
        </section>
        <section id="Services">
          <ParallaxScreen type="services" />
        </section>
        <section>
          <ServicesScreen />
        </section>
        <section id="Portfolio">
          <ParallaxScreen type="portfolio" />
        </section>
        <PortfolioComp />
        <section id="Contact">{/* <ContactComp /> */}</section>
      </div>
    </>
  );
}

export default App;
