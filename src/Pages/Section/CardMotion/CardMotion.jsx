

import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { useSpring, animated } from "@react-spring/web";

const CardMotion = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate rotation based on mouse position
  const rotation = useSpring({
    to: { rotate: (mousePosition.x / window.innerWidth) * 360 },
    config: { tension: 170, friction: 26 },
  });

  return (
    <Stack
      sx={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      <animated.div
        style={{ transform: rotation.rotate.to((r) => `rotate(${r}deg)`) }}
      >
        <FaArrowUpLong size={60} />
      </animated.div>
    </Stack>
  );
};

export default CardMotion;
