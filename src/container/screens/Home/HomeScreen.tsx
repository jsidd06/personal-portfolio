import Image from "../../../assets/about.png";
import CursorComp from "../../../components/cursor/Cursor";
import ContactScreen from "../contact/Contact";
import NavBarScreen from "../navbar/navbar";
import ParallaxScreen from "../Parallax/Parallax";
import PortfolioScreen from "../Portfolio/Portfolio";
import ServicesScreen from "../services/Services";
import "./HomeScreen.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButtons: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants: any = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function HomeScreen() {
  return (
    <>
      <CursorComp />
      <div>
        <section id="HomePage">
          <NavBarScreen />
          <div className="homePage">
            <div className="wrapper">
              <motion.div
                className="textContainer"
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                <motion.h2 variants={textVariants}>Siddharth Jain</motion.h2>
                <motion.h1 variants={textVariants}>
                  passionate frontend developer
                </motion.h1>
                {/* <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div> */}
                <motion.img
                  variants={textVariants}
                  animate="scrollButtons"
                  src="/public/scroll.png"
                  alt="scroll"
                />
              </motion.div>
            </div>
            <motion.div
              className="sliderTextContainer"
              variants={sliderVariants}
              initial="initial"
              animate="animate"
            >
              Freelancer or Full Time Software developer
            </motion.div>
            <div className="imageContainer">
              <img src={Image} alt="logo" />
            </div>
          </div>
          {/* <HomeScreen /> */}
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

export default HomeScreen;
