import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";

const IntroSection = ({ text }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 4,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 4,
      onUpdate: (latest) => {
        if (latest === text.length) {
          setAnimationCompleted(true);
        }
      },
    });

    return controls.stop;
  }, []);
  return (
    <Stack
      sx={{
        fontSize: {
          xs: "30px",
          sm: "30px",
          md: "62px",
          lg: "62px",
          xl: "62px",
        },
        lineHeight: {
          xs: "36px",
          sm: "36px",
          md: "72px",
          lg: "72px",
          xl: "72px",
        },
        fontWeight: { xs: 600, sm: 600, md: 600, lg: 600, xl: 600 },
        color: "rgb(0, 0, 0)",
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "column",
          lg: "column",
          xl: "column",
        },
        justifyContent: "center",
        alignItems: "center",
        //   border: "1px solid blue",
        width: { xs: "90%", sm: "90%", md: "70%", lg: "60%", xl: "60%" },

        textAlign: "center",
        marginBottom: {
          xs: "80px",
          sm: "80px",
          md: "80px",
          lg: "60px",
          xl: "60px",
        },
        overflowX: "hidden", // Avoids horizontal scroll
        padding: { xs: "0 10px" }, // Adds padding for mobile view without overflow
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <span>Switching platforms?</span>
        <span
          className={animationCompleted ? "animation-completed" : ""}
          style={{ color: "rgb(90, 69, 254)" }}
        >
          {/* <motion.span>{displayText}</motion.span> */}
          Let us guide you through.
        </span>
      </p>
    </Stack>
  );
};

export default IntroSection;
