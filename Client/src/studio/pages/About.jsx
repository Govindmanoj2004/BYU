import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Style from "./About.module.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const About = () => {
  const textTitle = "About BYU";
  const joinTitle = "Join BYU";
  const textParagraphs = [
    "At BYU, we are committed to delivering a seamless, engaging, and rewarding streaming experience for both creators and viewers.",
    "Our mission is to empower streamers with advanced tools to grow, monetize, and connect with their audience effortlessly.",
    "With live streaming, pre-recorded uploads, and interactive features, BYU enhances content creation and audience engagement.",
    "Whether you're a creator looking to expand your reach or a viewer exploring fresh content, BYU is the place to be. Join our thriving community today!"
  ];

  const [titleText, setTitleText] = useState([]);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [isJoinMode, setIsJoinMode] = useState(false);
  const [transitioning, setTransitioning] = useState(false); // Prevents abrupt switches

  useEffect(() => {
    setTitleText(textTitle.split(""));
  }, []);

  const handleNextText = () => {
    if (!transitioning) {
      setTransitioning(true);
      if (currentParagraphIndex < textParagraphs.length - 1) {
        setCurrentParagraphIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsJoinMode(true);
      }
    }
  };

  const handlePrevText = () => {
    if (!transitioning) {
      setTransitioning(true);
      if (isJoinMode) {
        setIsJoinMode(false);
      } else {
        setCurrentParagraphIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      }
    }
  };

  return (
    <main className={Style.body}>
      <section className={Style.mast}>
        <figure className={Style.mastbg}></figure>
        <header className={Style.mastheader}>
          <h1 className={Style.masttitle}>
            {isJoinMode
              ? joinTitle
              : titleText.map((char, index) => (
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
              className={`${Style.navIcon} ${
                currentParagraphIndex === 0 && !isJoinMode ? Style.disabled : ""
              }`}
            />
            <ArrowDownwardIcon
              onClick={handleNextText}
              className={`${Style.navIcon} ${isJoinMode ? Style.disabled : ""}`}
            />
          </div>

          <AnimatePresence
            mode="wait"
            onExitComplete={() => setTransitioning(false)}
          >
            {isJoinMode ? (
              <motion.div
                key="join"
                className={Style.joinContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.button
                  className={Style.joinButton}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Join Now
                </motion.button>
              </motion.div>
            ) : (
              <motion.p
                key={currentParagraphIndex}
                className={Style.masttext}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {textParagraphs[currentParagraphIndex]}
              </motion.p>
            )}
          </AnimatePresence>
        </header>
      </section>
    </main>
  );
};

export default About;
