import React, { useRef } from "react";
import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import "./Portfolio.scss";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque culpa consequuntur saepe quaerat atque et labore corporis repellat ipsa. Quaerat, cum odit at tempore perferendis necessitatibus amet eos voluptatibus.",
  },
  {
    id: 2,
    title: "React Native",
    img: "https://images.pexels.com/photos/372787/pexels-photo-372787.jpeg?auto=compress&cs=tinysrgb&w=800",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque culpa consequuntur saepe quaerat atque et labore corporis repellat ipsa. Quaerat, cum odit at tempore perferendis necessitatibus amet eos voluptatibus.",
  },
  {
    id: 3,
    title: "React with Vite",
    img: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque culpa consequuntur saepe quaerat atque et labore corporis repellat ipsa. Quaerat, cum odit at tempore perferendis necessitatibus amet eos voluptatibus.",
  },
  {
    id: 4,
    title: "Portfolio",
    img: "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=800",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex neque culpa consequuntur saepe quaerat atque et labore corporis repellat ipsa. Quaerat, cum odit at tempore perferendis necessitatibus amet eos voluptatibus.",
  },
];

const Single = ({ item }: any) => {
  const ref: any = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.des}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function PortfolioComp() {
  const ref: any = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item: any) => (
        <Single item={item} />
      ))}
    </div>
  );
}

export default PortfolioComp;
