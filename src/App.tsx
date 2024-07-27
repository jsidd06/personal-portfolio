import "./app.scss";
import CursorComp from "./components/cursor/Cursor";
import HomeScreen from "./container/screens/Home/HomeScreen";
import NavBarScreen from "./container/screens/navbar/navbar";
import ParallaxScreen from "./container/screens/Parallax/Parallax";
import ServicesScreen from "./container/screens/services/Services";
import PortfolioScreen from "./container/screens/Portfolio/Portfolio";
import ContactScreen from "./container/screens/contact/Contact";

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
        <PortfolioScreen />
        <section id="Contact">
          <ContactScreen />
        </section>
      </div>
    </>
  );
}

export default App;
