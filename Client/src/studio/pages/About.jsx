import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Style from "./About.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const About = () => {
  const textTitle = "About BYU";
  const textParagraphs = [
    "At BYU, we are committed to delivering a seamless, engaging, and rewarding streaming experience for both creators and viewers.",
    "Our mission is to empower streamers with advanced tools to grow, monetize, and connect with their audience effortlessly.",
    "With live streaming, pre-recorded uploads, and interactive features, BYU enhances content creation and audience engagement.",
    "Streamers can monetize through subscriptions, super chats, and customizable donations, ensuring greater control over their earnings.",
    "Whether you're a creator looking to expand your reach or a viewer exploring fresh content, BYU is the place to be. Join our thriving community today!"
  ];  

  const [titleText, setTitleText] = useState([]);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  useEffect(() => {
    setTitleText(textTitle.split(""));
  }, []);

  const handleNextText = () => {
    setCurrentParagraphIndex((prevIndex) =>
      prevIndex < textParagraphs.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevText = () => {
    setCurrentParagraphIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <main className={Style.body}>
      <section className={Style.mast}>
        <figure className={Style.mastbg}></figure>
        <header className={Style.mastheader}>
          <h1 className={Style.masttitle}>
            {titleText.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <hr className={Style.sep} />
          <div className={Style.navButtons}>
            <ArrowUpwardIcon 
              onClick={handlePrevText} 
              className={`${Style.navIcon} ${currentParagraphIndex === 0 ? Style.disabled : ""}`} 
            />
            <ArrowDownwardIcon 
              onClick={handleNextText} 
              className={`${Style.navIcon} ${currentParagraphIndex === textParagraphs.length - 1 ? Style.disabled : ""}`} 
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentParagraphIndex}
              className={Style.masttext}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              {textParagraphs[currentParagraphIndex]}
            </motion.p>
          </AnimatePresence>
        </header>
      </section>
    </main>
  );
};

export default About;
